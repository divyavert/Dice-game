var randomvar = Math.random();
randomvar = (randomvar*6)+1;
randomvar = Math.floor(randomvar);
var randomtar = Math.random();
randomtar = (randomtar*6)+1;
randomtar = Math.floor(randomtar);
document.querySelector(".img1").setAttribute("src",'images/dice'+randomvar+'.png');
document.querySelector(".img2").setAttribute("src",'images/dice'+randomtar+'.png');
if(randomtar > randomvar){
    document.querySelector("h2").innerHTML="palyer 2 wins";
}else if(randomtar<randomvar){
    document.querySelector("h2").innerHTML="palyer 1 wins";
}else{
    document.querySelector("h2").innerHTML="draw";
}