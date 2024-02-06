
let getNavBtn = document.querySelector(".navbar-toggler");
getNavBtn.addEventListener("click",function(){
    this.classList.toggle("active");
});

/* start pointer section */
document.querySelector(".pointer_section").addEventListener("click",function(){
    window.location.href="./contactus.html";
});

$(document).ready(function(){
        
    // Start Footer Section
        const getyear = $('#getyear');
        const getfullyear = new Date().getFullYear();
        getyear.text(getfullyear);
    // End Footer Section


});