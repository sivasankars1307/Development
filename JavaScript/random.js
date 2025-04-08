let btn=document.querySelector("button");
btn.addEventListener("click",function (){ 
    let h3=document.querySelector("h3");
    h3.innerText=getrandomColor();
    let div=document.querySelector("div");
    div.style.backgroundColor=getrandomColor();

})
let getrandomColor=function(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r}, ${g}, ${b})`;
    return color;
}