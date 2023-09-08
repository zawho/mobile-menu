function displayMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'dropdown-option') {
            thisMenuArr[i].style.display = 'flex';
        }
    }
}

function hideMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'dropdown-option') {
            thisMenuArr[i].style.display = 'none';
        }
    }
}

function setMenuEvent() {
    const body = document.querySelector('body');
    const bodyArr = Array.from(body.childNodes);
    for (let i = 0; i < bodyArr.length; i++) {
        if (bodyArr[i].className === 'dropdown-menu') {
            bodyArr[i].addEventListener('mouseover', displayMenu);
            bodyArr[i].addEventListener('mouseout', hideMenu);
        }
    }
}

function createMenu() {
    const body = document.querySelector('body');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    body.appendChild(mobileMenu);
    const mobileOptions = [];
    for (let i = 1; i < 6; i++) {
        mobileOptions[i] = document.createElement('div');
        mobileOptions[i].className = 'mobile-menu-option';
        if (i < 5) {
            mobileOptions[i].innerText = `option ${i}`;
        } else if (i === 5) {
            mobileOptions[i].innerText = 'more';
        }
        mobileMenu.appendChild(mobileOptions[i]);
    }
    // setMenuEvent();
}

function styleMenu() {
    const mobileMenus = document.querySelectorAll('.mobile-menu');
    for (let i = 0; i < mobileMenus.length; i++) {
        mobileMenus[i].style.display = 'flex';
        mobileMenus[i].style.justifyContent = 'space-between';
        mobileMenus[i].style.whiteSpace = 'nowrap';
        mobileMenus[i].style.gap = '5px';
        mobileMenus[i].style.padding = '5px';
    }
}

createMenu();
styleMenu();

export { setMenuEvent, createMenu, styleMenu };