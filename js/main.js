"use strict";
document.querySelector("#upload").onclick=function(){
    document.querySelector(".input").click();
};

document.querySelector(".input").onchange=function(e){
    [...e.target.files].forEach(file=>{
        if(file.type.match("image/*")){
            let tr=document.createElement("tr");
            let tdImg= document.createElement("td");
            let tdName= document.createElement("td");
            let tdSize = document.createElement("td");
            const reader= new FileReader();
            reader.onloadend=function(event){
                let img =document.createElement("img");
                let imgName = file.name;
                img.src= event.target.result;
                tdImg.appendChild(img);
                tdName.innerText=imgName;
                tdSize.innerText= (file.size/1000 +"mb");
                tr.appendChild(tdImg);
                tr.appendChild(tdName);
                tr.appendChild(tdSize);
                
                
            }
            reader.readAsDataURL(file);
            document.querySelector(".images").appendChild(tr);
        }
        else if(file.type.match("video/*")){
            let tr=document.createElement("tr");
            let tdImg= document.createElement("td");
            let tdName= document.createElement("td");
            let tdSize = document.createElement("td");
            const reader= new FileReader();
            reader.onloadend=function(event){
                let icon =document.createElement("i");
                let imgName = file.name;
                icon.innerHTML="<i class='fas fa-film'></i>";
                tdImg.appendChild(icon);
                tdName.innerText=imgName;
                tdSize.innerText= (file.size/1000 +"mb");
                tr.appendChild(tdImg);
                tr.appendChild(tdName);
                tr.appendChild(tdSize);
                
                
            }
            reader.readAsDataURL(file);
            document.querySelector(".videos").appendChild(tr);
        }
        else if(file.type.match("audio/*")){
            let tr=document.createElement("tr");
            let tdImg= document.createElement("td");
            let tdSize = document.createElement("td");
            let tdName= document.createElement("td");
            const reader= new FileReader();
            reader.onloadend=function(event){
                let icon =document.createElement("i");
                let imgName = file.name;
                icon.innerHTML="<i class='fas fa-music'></i>";
                tdImg.appendChild(icon);
                tdName.innerText=imgName;
                tdSize.innerText= (file.size/1000 +"mb");
                tr.appendChild(tdImg);
                tr.appendChild(tdName);
                tr.appendChild(tdSize);
                
                
            }
            reader.readAsDataURL(file);
            document.querySelector(".sounds").appendChild(tr);
        }
        
        
        
    })
    
}