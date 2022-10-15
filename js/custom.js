// "use strict"

const sidebar_toggle=()=>{
    document.querySelector(".main_wrapper").classList.toggle("active");
    document.querySelector(".sidebar").classList.toggle("active");  
}

const sidebar_toggle_btn=document.querySelector("#sidebar_toggle_btn");
sidebar_toggle_btn.addEventListener("click",sidebar_toggle);

const sidebar_link=()=>{
    document.querySelector(".sidebar_link").innerHTML=`<ul></ul>`;
}

