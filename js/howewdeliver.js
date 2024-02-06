// start scroll text ani
let getSections = document.querySelectorAll(".scroll_ani");

window.addEventListener("scroll",function(){
    let getPosition = this.window.scrollY - 100;
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
        activeAni(getTargetValue);
    }
    

})

function activeAni(idx){

    getSections.forEach(function(getSection){
        getSection.classList.remove("active");
    })
    getSections[idx].classList.add("active");


}

// end scroll text ani

