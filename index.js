let search=document.getElementsByClassName("search");
let input=document.querySelector("input");
let li=document.querySelectorAll("li");
let a=document.querySelectorAll("a");
let logout=document.getElementById("logout");
let logdesign=document.getElementsByClassName("logout");
let circle=document.getElementsByClassName("circle");
let mode=document.getElementsByClassName("mode");
let dark_mode=document.getElementById("dark_mode");
let light_mode=document.getElementById("light_mode");
let change=document.getElementById("change");
let heading=document.getElementsByClassName("heading");
let right=document.getElementById("right_arrow");
let left=document.getElementById("left_arrow");
let sidebarCircle=document.getElementsByClassName("sidebar_circle")

sidebarCircle[0].addEventListener("click",function(){
    // console.log("hello");
    // console.log(logdesign)
    if(window.getComputedStyle(right).display==="block"){
        right.style.display="none";
        left.style.display="block";
    }
    else{
        right.style.display="block";
        left.style.display="none";
    }
    heading[0].classList.toggle("updated_heading");
    console.log(search[0]);
    logdesign[0].classList.toggle("updated_log")
    input.classList.toggle("updated_input")
    search[0].classList.toggle("large_search");
    console.log(li[0].children[1]);
    logout.classList.toggle("updated_logout");
    mode[0].classList.toggle("updated_mode");
    if(window.getComputedStyle(dark_mode).display=="none"){
        dark_mode.style.display="flex"; 
    }
    else{
        dark_mode.style.display="none";  
    }
    for (const iterator of li) {
        iterator.classList.toggle("updated_li");
        iterator.children[1].classList.toggle("show_anchor");
        
    }
})
circle[0].addEventListener("click",function(){
    circle[0].classList.toggle("updated_circle");
    console.log(mode[0].children.length)
//    for(let i=0;i<mode[0].children.length-1;i++){
//     if(mode[0].children[i])
//    }
if(mode[0].classList.contains("updated_mode")){


if(window.getComputedStyle(dark_mode).display=="flex"){
    dark_mode.style.display="none";
    light_mode.style.display="flex"
 }
 else{
    dark_mode.style.display="flex";
    light_mode.style.display="none";

 }
}

})
change.addEventListener("click",function(){
    // console.log("hello");
    // console.log(root)
    document.body.classList.toggle("dark_theme");
})