
let flag = 0;
function controller(x){
    flag = flag + x ;
    slideshow(flag)
}
slideshow(flag)
function slideshow(num){
    let slides = document.getElementsByClassName('slides');
    for(y of slides){
        y.style.display="none";
        
    }
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    
    slides[num].style.display = "block";
}

function Autoslides(){
    interval = setInterval(function() {
        controller(1);
    }, 4000);

}
function Stopslides(){                                                                                                            
    clearInterval(interval);
}
Autoslides()
slideshow(flag)





// function click(){
//     const page = document.querySelector('.show-page').style.visibility = "visible";

       
// }
// click();
// const x = document.addEventListener(click, click());

