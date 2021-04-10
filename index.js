

var drumslength=document.querySelectorAll(".drum-btn").length;

for(var a=0; a<drumslength; a++){

    

    // Detecting Button Press    
    document.querySelectorAll(".drum-btn")[a].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);

        // button press Animation
        btnpressanimation(buttonInnerHTML);

    });
}

    // Detecting Keyboard Press    
    document.addEventListener("keydown", function(event){
   makesound(event.key);

//    Button press Animation
        btnpressanimation(event.key)

    });


//  Function to make sound
function makesound(key){

    switch(key){
        case "w":
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio('sounds/kick-bass.mp3');
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio('sounds/snare.mp3');
            audio7.play();
            break;
        
        default:
            alert("Wrong key input: "+key);
    }
}


function btnpressanimation(currentkey){

 var activebutton = document.querySelector("."+currentkey);


 activebutton.classList.add("pressed");
    

    
    setTimeout(function(){       activebutton.classList.remove("pressed");}, 200);


}


