function themeFunction(){
    document.getElementById('header').classList.toggle("theme-header");
    document.body.classList.toggle("theme-wrapper_id");
    document.getElementById('footer').classList.toggle("theme-footer");
    document.getElementById('theme').classList.toggle("image");
    document.getElementById('h333').classList.toggle("theme-h3")
}
function modeFunction(){
    document.getElementById('header').classList.toggle("theme-header");
    document.body.classList.toggle("theme-wrapper_id");
    document.getElementById('footer').classList.toggle("theme-footer");
    document.getElementById('id1').classList.toggle("theme-main1_p");
    document.getElementById('id2').classList.toggle("theme-main1_p");
    document.getElementById('id3').classList.toggle("theme-main1_p");
    document.getElementById('id4').classList.toggle("theme-main1_p");
    document.getElementById('the').classList.toggle("image");
    var element = document.getElementById('h3_3');
    element.classList.toggle("theme-h-3");
    document.getElementById('main1_p').classList.toggle("theme_of_main1p");
}

document.getElementById('btn').addEventListener("click",function (){   
    document.getElementById('id1').innerHTML = '<img  src="person.png" alt="person" width="5rem">'+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Ramayan Singh</p>';
    document.getElementById('id2').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Rohan Kumar' ;       
    document.getElementById('id3').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Arjun Kapoor' ;       
    document.getElementById('id4').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Mohan Rustogi' ;       

    document.getElementById('btn').addEventListener("click",function (){
        document.getElementById('id1').innerHTML = '<img  src="person.png" alt="person" width="5rem">'+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Scott Adkins</p>';
        document.getElementById('id2').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Dustin Porior' ;       
        document.getElementById('id3').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Raman Singh' ;       
        document.getElementById('id4').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Mamta Kashayup' ;       

        document.getElementById('backbtn').addEventListener("click",function (){
            document.getElementById('id1').innerHTML = '<img  src="person.png" alt="person" width="5rem">'+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Ramayan Singh</p>';
            document.getElementById('id2').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Rohan Kumar' ;       
            document.getElementById('id3').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Arjun Kapoor' ;       
            document.getElementById('id4').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Mohan Rustogi' ;                  

            document.getElementById('backbtn').addEventListener("click",function (){
                document.getElementById('id1').innerHTML ='<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Aryan Singh';
                document.getElementById('id2').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Reema Singh' ;       
                document.getElementById('id3').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Madhav RK' ;       
                document.getElementById('id4').innerHTML = '<img src="person.png" alt="person"width="5rem"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★<br>&nbsp;&nbsp;&nbsp;Asha Bista' ;       
                   
            });
        }); 
    }); 
});
