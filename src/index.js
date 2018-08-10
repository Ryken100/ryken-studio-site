import './style/main.scss';
import zenscroll from './assets/js/zenscroll-min.js';

zenscroll.setup(null, 0); // Setup zenscroll to support URL hashes

function debounce(func, wait, immediate) { // Debounce function (Bing it if you don't know)
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
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

function isNearTop() {
    if (!((document.documentElement && document.documentElement.scrollTop) ||
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        document.body.scrollTop > 100)) return true;
    else return false;
}

function isNearBottom() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) return true;
    else return false;
}

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

document.addEventListener("DOMContentLoaded", function(event) { // Wait for the DOM to finish loading
    for (let i in document.getElementsByClassName('navButton')) { // Loop through all the navButtons
        if (document.getElementsByClassName('navButton')[i].classList && document.getElementsByClassName('navButton')[i].classList[0] == 'navButton') { // Make sure it has a proper classList
            let sectionName = document.getElementsByClassName('navButton')[i].classList[1]; // Get the buttons' supplemental second class
            let section = document.querySelector('section#' + sectionName); // Target the <section> that has an ID that matches our navButton's second class

            document.getElementsByClassName('navButton')[i].addEventListener('click', () => { // Add a 'click' event listenter 
                zenscroll.intoView(section, 500, () => { // Scroll that section into view over 500ms
                    window.location.hash = section.id; // Change the browser URL hash when done
                });
            });
        }
    }
});


import slider from './assets/html/slider.html'; // Get photo slider template
import './assets/js/jssor.slider.min.js'; // Library for controlling the Photo Slider

// A compactified template function for initializing a photo slider
let initPhotoSlider = `(function() {var $=[{$Duration:1200,x:-.3,$During:{$Left:[.3,.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:.3,$SlideOut:!0,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}],i={$AutoPlay:1,$SlideshowOptions:{$Class:$JssorSlideshowRunner$,$Transitions:$,$TransitionsOrder:1},$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$},$ThumbnailNavigatorOptions:{$Class:$JssorThumbnailNavigator$,$Orientation:2,$NoDrag:!0}},s=new $JssorSlider$("jssor",i),a=1500;function n(){var $=s.$Elmt.parentNode.clientWidth;if($){var i=Math.min(a||$,$);s.$ScaleWidth(i)}else window.setTimeout(n,30)}n(),$Jssor$.$AddEvent(window,"load",n),$Jssor$.$AddEvent(window,"resize",n),$Jssor$.$AddEvent(window,"orientationchange",n)})()`;

// Get slide data. Name before 'Slides' must match the ID of the grandfather element it's contained in.
let photoshaderSlides = require('./assets/html/slide-data/photoShader.html');
let myTubeSlides = require('./assets/html/slide-data/myTube.html');

document.querySelectorAll('section header div#photoSlider').forEach(function(item) {
    let id = item.parentElement.parentElement.id; // Get the ID of the grandfather element the photo slider belongs to.
    let slideDataTarget = eval(id + 'Slides'); // Get the right slide data variable based on the ID of the grandfather element
    
    let data = insert(slider, slider.indexOf('id=slideData>') + 'id=slideData>'.length, slideDataTarget); // Combine the slider data and template into new variable 
    data = replaceAll(data, 'jssor_', 'jssor_' + id + '_'); // Give every part of the new data a unique ID based on the grandfather element ID
    data = replaceAll(data, 'id=jssor', 'id=jssor_' + id); // Make this slider's root div unique so the init function can target it exclusively

    item.innerHTML = data; // Place the new HTML onto the page

    let init = replaceAll(initPhotoSlider, '"jssor"', '"jssor_' + id + '"'); // Make the targeted photo slider match this slider's root div 
    console.log(init);
    eval(init); // Init the photo slider for this section

});
