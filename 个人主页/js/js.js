
var lou=document.querySelectorAll('.fu ul li')
var louparp=document.querySelector('.fu ul')
var ceng=document.querySelectorAll('.za')
console.log(ceng)
var dinow=0 ,flas=true,flas1=false;
window.onscroll=function () {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    ceng.forEach(function (value, index) {
        if (scroll >= (value.offsetTop - 100)) {
            for (var i = 0; i < lou.length; i++) {
                lou[i].classList.remove('fudong-2bg')
            }
            lou[index].classList.add('fudong-2bg')
            dinow = index;
        } else if (scroll < ceng[0].offsetTop - 100) {
            for (var i = 0; i < lou.length; i++) {
                lou[i].classList.remove('fudong-2bg')
            }
        }
    })
}
lou.forEach(function (value, index) {
    value.onclick = function () {
        animate(document.body, {scrollTop: ceng[index].offsetTop - 100})
        animate(document.documentElement, {scrollTop: ceng[index].offsetTop - 300})
    }
    value.onmousemove = function () {
        value.classList.add('fudong-2bg')
        console.log(dinow,index)
    }
    value.onmouseleave = function () {
        if (dinow!=index) {
            value.classList.remove('fudong-2bg')
        }
    }
})