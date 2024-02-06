let getUiAccordianCapts = document.querySelectorAll(".ui_accordian_caption");
let getAccordianContents = document.querySelectorAll(".ui_accordian_content");

getUiAccordianCapts.forEach(function(getUiAccordianCapt,idx){
    getUiAccordianCapt.setAttribute("show-accord-content",idx);
})

getUiAccordianCapts.forEach(function(getUiAccordianCapt){
    getUiAccordianCapt.addEventListener("click",function(){
        let getIdx = this.getAttribute("show-accord-content");
        showContent(getIdx);
    })
})

function showContent(idx){
    getUiAccordianCapts[idx].classList.toggle("active");
    getAccordianContents[idx].classList.toggle("active");
}
