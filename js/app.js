var burger=document.getElementById("burg");

const act=document.getElementsByClassName('active');
 burger.onclick=function()
{
    
    
   
    var menu=document.getElementById('burgerMenu');
    menu.classList.toggle('active');


    var line1=document.getElementById('line1');
    line1.classList.toggle('active_line');

    var line2=document.getElementById('line2');
    line2.classList.toggle('active_line_2');
    var line3=document.getElementById('line3');
    line3.classList.toggle('active_line_3');

   

}


// function goback(){
//     var menu=document.getElementById('burgerMenu');
//     menu.classList.toggle('active');;

//     var burgerr=document.getElementById('burg');
//     burgerr.style.position="";

//     var line1=document.getElementById('line1');
//     line1.classList.add('line_ret');

//     var line2=document.getElementById('line2');
//     line2.classList.add('line_ret');
//     var line3=document.getElementById('line3');
//     line3.classList.add('line_ret');
    
    

// }

 
// Get DOM Elements
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }