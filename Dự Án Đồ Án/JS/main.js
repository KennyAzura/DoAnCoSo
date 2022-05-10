const items = document.getElementsByClassName('nav_page_li')
const tabContents = document.querySelectorAll('.main')
const removeActiveItem = () => {
    let tabItems = document.getElementsByClassName('nav_page_li')
    let tabLiItems = document.getElementsByClassName('nav_page_li-item_div')
    let array = Array.from(tabItems)
    let arrLiItem = Array.from(tabLiItems)
    array.forEach((e) => {
        if(e.classList.contains('active')) {
            e.classList.remove('active')
        }
    })
    arrLiItem.forEach((e) => {
        if(e.classList.contains('active')) {
            e.classList.remove('active')
        }
    })
}
const removeActiveTabContent = () => {
    Array.from(tabContents).map((e) => {
        if(e.classList.contains('active-tab-content')) {
            e.classList.remove('active-tab-content')
        }
    })
}
const handleClick = (event) => {
    removeActiveItem()
    event.target.classList.add('active')
    let dataId = event.target.dataset.id;
    removeActiveTabContent()
    Array.from(tabContents).map((e) => {
        if(e.dataset.id == dataId) {
            e.classList.add('active-tab-content')
            console.log(dataId)
        }
    })
}
Array.from(items).forEach((item) => {
    item.addEventListener('click', handleClick)
})

var menuOpen = document.getElementById('nav_menu-open');
var Block = document.querySelector('.nav_page');

menuOpen.onclick = function(){
    Block.classList.toggle('Block')
}