const sidebar = document.querySelector('.sidebar')

function show() {
    sidebar.style.display = 'flex'
}

function hide() {
    sidebar.style.display = 'none'
}

// For Scroll to Top Button
const btn = document.getElementById("btn");

//hide and show btn
window.onscroll = function  () {
    hideBtn();
}

function hideBtn () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
}

//for scrolling
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})