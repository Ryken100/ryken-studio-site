import './style/main.scss';

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
        throw new Error('Params for isScrolledIntoView() are not defined properly ')
    }
}


document.addEventListener("DOMContentLoaded", function(event) { // Wait for the DOM to finish loading

    for (let i in document.getElementsByClassName('navButton')) { // Loop through all the navButtons
        if (document.getElementsByClassName('navButton')[i].classList[0] == 'navButton') { // Make sure it has a proper classList
            let sectionName = document.getElementsByClassName('navButton')[i].classList[1]; // Get the buttons identifying class
            let section = document.querySelector('section.' + sectionName); // Target the <section> that has a class that matches our navButton

            document.getElementsByClassName('navButton')[i].addEventListener('click', () => { // Add a 'click' event listenter 
                section.scrollIntoView(false, {behavior: 'smooth'}); // Scroll that section into view
            });
        }
    }
});

document.addEventListener('scroll', () => {
    if (!isScrolledIntoView(document.querySelector('section.main header p#title'), document.getElementsByTagName('nav')[0])) {
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
});
