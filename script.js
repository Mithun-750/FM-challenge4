const displayWidth = window.innerWidth;
let ham_place = document.getElementById(`nav_right`)
let nav = document.getElementById(`nav`)
ham = document.createElement(`img`)

ham.setAttribute(`src`, `./assets/images/icon-menu.svg`)
ham.setAttribute(`id`, `ham_burger`)
if (displayWidth <= 820) {
    ham_place.remove()
    
    nav.append(ham)
    
    side_nav = document.createElement(`div`)
    side_nav.setAttribute(`class`, `side_nav`)
    
    document.body.append(side_nav)
    
    side_nav.style.transition = `width 1s ease-in-out`
    
    ham.addEventListener(`click`, () => {
        side_nav.innerHTML = `
        <img src="./assets/images/icon-menu-close.svg" alt="" id="side_close">
        <ul id="nav_right">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
        </ul>
        `
        side_nav.classList.add(`side_nav_open`)
        nav.classList.add(`curtain`)
        let side_close = document.getElementById(`side_close`)
        side_close.addEventListener(`click`, () => {
            side_nav.classList.remove(`side_nav_open`)
            nav.classList.remove(`curtain`)
            side_nav.innerHTML = ``
        })
    })
    
}
if (displayWidth <= 450) {
    let img = document.getElementById(`left_con_img`)
    img.setAttribute(`src`, `./assets/images/image-web-3-mobile.jpg`)
}