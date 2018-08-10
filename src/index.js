import './style/main.scss';

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