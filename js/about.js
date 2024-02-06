let getSections = document.querySelectorAll(".ani_box");

window.addEventListener("scroll",function(){
    let getPosition = this.window.scrollY - 300;
    let targetSections = [];
    getSections.forEach(function(getSection){
        targetSections.push(getSection.offsetTop);
    })
    let getSectionPositions = [];

    targetSections.forEach(function(targetSection){
        if(targetSection >= getPosition) {
            getSectionPositions.push(targetSection);
        }
    })


    let getTargetValue = targetSections.indexOf(getSectionPositions[0]);

    if(getTargetValue >= 0){
        setTimeout(function(){
            activeAni(getTargetValue);
        },3000)
        
    }
    

})

function activeAni(idx){

    getSections.forEach(function(getSection){
        getSection.classList.remove("active");
    })
    getSections[idx].classList.add("active");



}

// end scroll text ani

// wow js
new WOW().init();
// end wow js