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

 
