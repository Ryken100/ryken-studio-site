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
    if (el && relElem) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top + relElem.getBoundingClientRect().height;
        var elemBottom = rect.bottom - relElem.getBoundingClientRect().height;
        return elemTop < window.innerHeight && elemBottom >= 0;
    } else {
        throw new Error('Params for isScrolledIntoView() are not defined properly ')
    }
}

document.addEventListener('scroll', () => {
    if (!isScrolledIntoView(document.getElementById('top-title'), document.getElementsByTagName('nav')[0])) {
        console.log('gone');
        document.querySelector('div.navButton.main .icon').classList.add('show');
        document.querySelector('div.navButton.main .text').classList.add('hide');

        document.querySelector('div.navButton.main .text').classList.remove('show');
        document.querySelector('div.navButton.main .icon').classList.remove('hide');
    } else {
        document.querySelector('div.navButton.main .text').classList.add('show');
        document.querySelector('div.navButton.main .icon').classList.add('hide');

        document.querySelector('div.navButton.main .icon').classList.remove('show');
        document.querySelector('div.navButton.main .text').classList.remove('hide');
    }
});
