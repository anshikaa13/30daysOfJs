// Activity1
let changecontent=document.getElementById("para");
changecontent.textContent="text content changed";

// task2
let bgElements = document.getElementsByClassName("task1");
for (let i = 0; i < bgElements.length; i++) {
    bgElements[i].style.backgroundColor = "blue";
}

// ACTIVITY 2
let newdiv=document.createElement("div");
newdiv.textContent="creted new div";
document.body.appendChild(newdiv);

// task4
let mylist=document.querySelector(".task4");
let newlistitem=document.createElement("li");
newlistitem.textContent="zero";
mylist.appendChild(newlistitem);


// activity 3
let elementre= document.querySelector("#para")
elementre.remove()

// task 6
let lastchild= document.body.lastElementChild
lastchild.remove()

// activity 4
let myimage=document.querySelector("#image")
myimage.setAttribute("src","cat.jpg")

// task8
let myelement=document.querySelector("h1")
myelement.classList.add("heading")

// HTMLCollection [h1.heading]

// activity 5
let addevent=document.getElementById("buttonn").addEventListener('click',function(){
    let paraa=document.getElementById("task9")
    paraa.textContent="learned javascript"
})

// task10

    const elementy = document.getElementById("list");
    elementy.addEventListener("mouseover", ()=>{
        elementy.style.borderColor = "red"; 
    });








