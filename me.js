var rand=Math.floor(Math.random()*6)+1;
var randomsource="images/" + "dice" + rand + ".png"
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource);
var rand1=Math.floor(Math.random()*6)+1;
var randomsource1="images/" + "dice" + rand1 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource1);
if(rand>rand1){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(rand<rand1){
    document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="Draw!!...Do it again";
}
