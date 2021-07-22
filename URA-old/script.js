/* homepage blur */
function toggleBlur(id) {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById(id);
    popup.classList.toggle('active');
};


/* container */
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}


/* slider */

let span = document.getElementsByTagName('span');
let element = document.getElementsByClassName('slider-element')
let element_page = Math.ceil(element.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

// Mobile view
let mobile_view = window.matchMedia("(max-width: 700px)");
if(mobile_view.matches)
{
    movePer = 50.36;
    maxMove = 504;
}

let right_move = () => {
    l += movePer;
    if(element == 1) { l = 0; }
    for(const i of element)
    {
        if(l > maxMove) { l -= movePer; }
        i.style.left = '-' + l + '%';
    }
}

let left_move = () => {
    l -= movePer;
    if(l <= 0) { l = 0;}
    for(const i of element)
    {
        if(element_page > 1)
        i.style.left = '-' + l + '%';
    }
}

span[1].onclick = () => { right_move(); }
span[0].onclick = () => { left_move(); }