import './style/main.scss';
import zenscroll from './assets/js/zenscroll-min.js';

zenscroll.setup(null, 20); // Setup zenscroll to support URL hashes

function debounce(func, wait, immediate) { // Debounce function (Bing it if you don't know)
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function replaceAll(str, find, replace) { // Function to replace all instances of some string in a string 
    'use strict';
    return String.raw`${str}`.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), replace);
}

function insert(source, index, inserted) { // Function to insert a string into another string at a specific index
    if (index > 0)
        return source.substring(0, index) + inserted + source.substring(index, source.length);
    else
        return inserted + this;
};

function isScrolledIntoView(el, relElem) {
    // el is the element being scrolled around
    // relElem is used for sticky elements like navigation bars
    if (el && relElem) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + relElem.getBoundingClientRect().height;
        var elemBottom = rect.bottom - relElem.getBoundingClientRect().height;
        return elemTop < window.innerHeight && elemBottom >= 0;
    } else {
        throw new Error(`Parameters for isScrolledIntoView() are not defined properly: 
        el: ${el}
        relElem: ${relElem}
        `);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    function manageNavLogo() {
        if (!isScrolledIntoView(document.querySelector('section#main header p#title'), document.querySelector('nav'))) {
            // If the 'main' header's title is not scrolled into view, show the icon
            document.querySelector('div.navButton.main .icon').classList.add('show');
            document.querySelector('div.navButton.main .icon').classList.remove('hide');
            // And hide the text
            document.querySelector('div.navButton.main .text').classList.remove('show');
            document.querySelector('div.navButton.main .text').classList.add('hide');
        } else {
            // If not in view, show the text
            document.querySelector('div.navButton.main .text').classList.add('show');
            document.querySelector('div.navButton.main .text').classList.remove('hide');
            // and hide the icon
            document.querySelector('div.navButton.main .icon').classList.remove('show');
            document.querySelector('div.navButton.main .icon').classList.add('hide');
        }
    }
    manageNavLogo = debounce(manageNavLogo, 25); // Debounce the function that is fired when scrolled. This helps with performance
    document.addEventListener('scroll', manageNavLogo);
});

document.addEventListener("DOMContentLoaded", function (event) { // Wait for the DOM to finish loading

    for (let i in document.getElementsByClassName('navButton')) { // Loop through all the navButtons
        if (document.getElementsByClassName('navButton')[i].classList && document.getElementsByClassName('navButton')[i].classList[0] == 'navButton') { // Make sure it has a proper classList

            let sectionName = document.getElementsByClassName('navButton')[i].classList[1]; // Get the buttons' supplemental second class
            let section = document.querySelector('section#' + sectionName); // Target the <section> that has an ID that matches our navButton's second class

            document.getElementsByClassName('navButton')[i].addEventListener('click', () => { // Add a 'click' event listenter 
                zenscroll.intoView(section, null, () => { // Scroll that section into view over 500ms
                    window.location.hash = section.id; // Change the browser URL hash when done
                });
            });
        }
    }

    setTimeout(setupEmblaCarousels, 500);
});


import EmblaCarousel from 'embla-carousel';

function setupEmblaCarousels() {
    const emblaNodes = document.querySelectorAll('.embla');

    for (let node of emblaNodes) {
        const embla = EmblaCarousel(node, { loop: true });

        let periodicScrollerArgs = [() => {
            embla.scrollNext();
        }, 3000];

        let periodicScroller = setInterval(...periodicScrollerArgs);

        embla.on("dragStart", () => {
            clearInterval(periodicScroller);
        });

        embla.on("dragEnd", () => {
            periodicScroller = setInterval(...periodicScrollerArgs);
        });
    }
}