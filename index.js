var ramdomNumber1=Math.floor(Math.random()*6)+1;
var randomimg="images/dice"+ramdomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg);
var ramdomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+ramdomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);
if(ramdomNumber1>ramdomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!"
}
else if(ramdomNumber1<ramdomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw btw players!"
}