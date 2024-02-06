$(document).ready(function(){
    // start portfolio sections
    $(".portfoliolists").click(function(){
        // console.log($(this))
        let gettabtitle = $(this).data("filter");

        // console.log(gettabtitle);
        if(gettabtitle === "all"){
            $(".filters").show();
        }else{
            $(".filters").hide();
            $(".filters").not("."+gettabtitle).hide();
            $(".filters").filter("."+gettabtitle).show();
        }

        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    
    })
})