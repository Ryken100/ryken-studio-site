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
        document.getElementById('main-link-icon').classList.add('slidedown');
        document.getElementById('main-link-icon').classList.remove('slideup');

        document.getElementById('main-link-text').classList.add('slideup');
        document.getElementById('main-link-text').classList.remove('slidedown');

    } else {
        document.getElementById('main-link-text').classList.add('slidedown');
        document.getElementById('main-link-text').classList.remove('slideup');

        document.getElementById('main-link-icon').classList.remove('slidedown');
        document.getElementById('main-link-icon').classList.add('slideup');

    }
});