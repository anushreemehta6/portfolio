 // about me button on main screen 
 let button = document.getElementById("btn")

function Change(){
    button.style.backgroundColor = '#DAB5C4'
    button.style.color = 'black'
}
function change2(){
    button.style.backgroundColor ='#917468'
    button.style.color = 'white'
    

}

//more button on about me page 

let button2 = document.getElementById("more");

function hover(){
    button2.style.backgroundColor = '#917468'
    button2.style.color = 'black'
}
function hovertwo(){
    button2.style.backgroundColor ='#2D3551'
    button2.style.color = 'white'
    

}

// increase in the img size 

let myImg = document.getElementById("pic2")
function zoomin(){
     
        myImg.style.height = '469px';
       myImg.style.width = '469px';
    
}
function zoomout(){
    myImg.style.height = '376px';
       myImg.style.width = '376px';
    

}

// scroll to experience
document.getElementById('exp').addEventListener('click', function() {
    document.getElementById('heading-e').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('skl').addEventListener('click', function() {
    document.getElementById('heading-e').scrollIntoView({ behavior: 'smooth' });
  });