let imgs =document.querySelectorAll("#slides img");
console.log(imgs);

let next_bttn = document.querySelector("#next");
let prev_bttn = document.querySelector("#prev");

let img_num = 0;

let dots = document.querySelectorAll(".dot");
let dot_num = 0;
dots[0].classList.add("active");

next_bttn.addEventListener('click',function(){
    img_num++;
    if(img_num>=imgs.length){
        img_num=0;
    }
    console.log(img_num);
    showing(img_num);
})



prev_bttn.addEventListener('click',function(){
    img_num--;
    if(img_num<0) {
        img_num=imgs.length-1;
    }
    console.log(img_num)
    showing(img_num);
})

function showing(n){
    for(let i=0 ; i<imgs.length ;i++){
        imgs[i].style.display ="none";
        dots[i].classList.remove("active");
    }
    imgs[n].style.display="block";
    dots[n].classList.add("active");
}

let slide =setInterval(function(){
    img_num++;
    if(img_num>=imgs.length){
        img_num=0;
    }
    console.log(img_num);
    showing(img_num);}, 3000);


document.querySelector("#slides img").onclick = function(){
    clearInterval(slide);
}






let prevBttn = document.getElementById("prevBttn")
let nextBttn = document.getElementById("nextBttn")
let slide_num = document.querySelectorAll(".allcover");
let imgslide_num = -1;

let total = document.querySelector("#total");
let current = document.querySelector("#current");
total.innerText = slide_num.length;
nextSlide();

function nextSlide(){
    for(let i=0 ; i<slide_num.length ; i++){
        slide_num[i].style.display="none";
        
    }
    imgslide_num++
    if(imgslide_num>=slide_num.length){
        imgslide_num =0;
    }
    slide_num[imgslide_num].style.display="block";
    current.innerText = (imgslide_num+1);
}
nextBttn.addEventListener('click',nextSlide);

function prevSlide(){
    for(let i=0 ; i<slide_num.length ; i++){
        slide_num[i].style.display="none";
        
    }
    imgslide_num--
    if(imgslide_num<0){
        imgslide_num=4;
    }
    slide_num[imgslide_num].style.display="block";
    current.innerText = (imgslide_num+1);

}

prevBttn.addEventListener('click',prevSlide);

