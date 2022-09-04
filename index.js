var a = Math.floor(Math.random()*6)+1;
var b = Math.floor(Math.random()*6)+1;

var src1 = "dice"+a+".png";
var src2 = "dice"+b+".png";
document.querySelector(".img1").setAttribute("src",src1);

// you can also do this too 
// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);
document.querySelector(".img2").setAttribute("src",src2);

let win = new Audio('other.wav');
let draw = new Audio('draw.wav');
if (a>b) { 
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!" ;
    win.play();
}
    else if(a==b){ 
    document.querySelector("h1").innerHTML = '🚩That`s a Draw🚩';
    draw.play();
    }
    else{ 
    document.querySelector("h1").innerHTML = 'Player 2 Wins! 🚩';
    win.play();
    }


