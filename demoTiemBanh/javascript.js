window.onscroll = function(){stickyTop()};
var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;
function stickyTop(){
    if(window.pageYOffset > sticky){
        nav.classList.add("fixed-top");
    }else{
        nav.classList.remove("fixed-top");
    }
}