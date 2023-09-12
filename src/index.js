function displayMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'more-option') {
            thisMenuArr[i].style.display = 'flex';
        }
    }
}

function hideMenu() {
    const thisMenuArr = Array.from(this.childNodes);
    for (let i = 0; i < thisMenuArr.length; i++) {
        if (thisMenuArr[i].className === 'more-option') {
            thisMenuArr[i].style.display = 'none';
        }
    }
}

function setMenuEvent() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuArr = Array.from(mobileMenu.childNodes)
    for (let i = 0; i < mobileMenuArr.length; i++) {
        console.log(mobileMenuArr[i]);
        if (mobileMenuArr[i].id === 'more-menu') {
            mobileMenuArr[i].addEventListener('mouseover', displayMenu);
            mobileMenuArr[i].addEventListener('mouseout', hideMenu);
        }
    }
}

function createMoreMenu() {
    const moreMenu = document.querySelector('#more-menu');
    const moreOptions = [];
    for (let i = 1; i < 6; i++) {
        moreOptions[i] = document.createElement('div');
        moreOptions[i].className = 'more-option';
        moreOptions[i].innerText = `more ${i}`;
        moreOptions[i].style.display = 'none';
        moreMenu.appendChild(moreOptions[i]);
    }
    setMenuEvent();
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
        } else {
            mobileOptions[i].innerText = 'more';
            mobileOptions[i].id = 'more-menu';
        }
        mobileMenu.appendChild(mobileOptions[i]);
    }
    createMoreMenu();
}

function styleMenu() {
    const mobileMenus = document.querySelectorAll('.mobile-menu');
    for (let i = 0; i < mobileMenus.length; i++) {
        mobileMenus[i].style.display = 'grid';
        mobileMenus[i].style.grid = '1fr / repeat(5, 1fr)';
        mobileMenus[i].style.justifyItems = 'center';
        mobileMenus[i].style.textAlign = 'center';
        mobileMenus[i].style.whiteSpace = 'nowrap';
        mobileMenus[i].style.padding = '5px';
    }
}

createMenu();
styleMenu();

export { setMenuEvent, createMenu, styleMenu };