window.alert("thanks for visiting my website, i made this side my self with 13 hours of work , and now im very proud of it . ill add my projects section to the side soon .😊🧐😇 ")
let oldValue = 0;

window.addEventListener('scroll',s);


function s(e){

    newValue = window.pageYOffset;

    if(oldValue - newValue < 0){
        
        $("nav").slideUp("fast")
    } else if(oldValue - newValue > 0){
                
        $("nav").slideDown("fast")}
        oldValue = newValue;

}


var a=0;

$(".menu").click(()=>{
    $(".side_bar").toggle("")
    if (a%2==0) {
        window.removeEventListener("scroll",s)
    }
    else{
        window.addEventListener("scroll",s)
    }
    a+=1
    console.log("clicked side_bar "+a+" times !");
})

$(".side_bar").hide()




$(".s1").click(()=>{
    window.scrollTo(0,0)  
})
$(".s2").click(()=>{
    window.scrollTo(100,100)  
})
$(".s3").click(()=>{
    window.scrollTo(350,350)  
})
$(".s4").click(()=>{
    window.scrollTo(670,670)  
})
$(".s5").click(()=>{
    window.scrollTo(1070,1070)  
})