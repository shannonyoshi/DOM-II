// Your code goes here

// * [ ] `drag / drop`


//changes header color/text logo on mouseover
const nav = document.querySelector(".main-navigation");
nav.addEventListener("mouseover", event=> {
    nav.style.backgroundColor = "#FFE152";
    nav.style.color = "white"
});
//prevents nav items from refreshing page
const anch = document.querySelectorAll(".nav-link")
for (let i=0; i<anch.length; i++){
    anch[i].addEventListener("click", event=>{
        event.preventDefault()
    })
}

//when window is resized, nav switches to bottom
window.addEventListener("resize", event=>{
    nav.style.bottom = "0";
})

//reverts back once mouse is moved out
nav.addEventListener("mouseleave", event=> {
    nav.style.backgroundColor = "white";
    nav.style.color = "black"
});
//when using a scroll wheel over the image, interts the color
const busImg = document.querySelector(".intro img")
busImg.addEventListener("wheel", event=> {
    busImg.style.filter="invert(100%)";
})
//double click on the first button hides/shows the boat image
const btn = document.querySelector(".btn")
const boatImg = document.querySelector(".content-destination img")
btn.addEventListener('dblclick', event=> {
    boatImg.classList.toggle('hidden')
})
//scrolling on the page turns this paragraph yellow
const paragraph = document.querySelector(".intro p");
window.addEventListener("scroll", event=> {
    paragraph.style.color = "yellow"
})
//loading page swaps images
const firstImg = document.querySelector(".content-section img")
const secondImg = document.querySelector(".inverse-content img")
window.addEventListener("load", event=>{
    firstImg.setAttribute('src', "img/fun.jpg")
    secondImg.setAttribute('src', "img/adventure.jpg")
})
//pressing any key turns images upside down
window.addEventListener("keydown", event=>{
    firstImg.style = 'transform: rotate(180deg)'
    secondImg.style = 'transform: rotate(180deg)'
})
//creates textArea
const textArea = document.createElement("textarea")
textArea.textContent = "This is some text. I am adding it so that I can create an event listener for select, which only works on the text area tag and elements with text input types"
paragraph.append(textArea)
textArea.style.width = "100%"
//selecting text area triggers alert
textArea.addEventListener("select", event=>{
    alert("Stop selecting that!")
})
//clicking on textarea changes the background color
textArea.addEventListener("focus", event=>{
    event.target.style.background = 'rgba(0,255,255,.2)'
})
//drag the blue square around
const dragIt = document.createElement("div")
dragIt.setAttribute("style", "background-color: blue; height: 100px; width: 100px; position: absolute;")
dragIt.setAttribute('draggable', true)
paragraph.append(dragIt)

let shiftX, shiftY

dragIt.addEventListener("dragstart", event => {
    shiftX = event.clientX - dragIt.getBoundingClientRect().left;
    shiftY = event.clientY - dragIt.getBoundingClientRect().top;
})

dragIt.addEventListener("dragend", event =>{
    
    console.log(shiftX, shiftY);
    dragIt.style.position = "absolute";
    dragIt.style.left = event.clientX - shiftX + "px";
    dragIt.style.top = event.clientY - shiftY + "px";
    console.log(event.clientY, event.clientX);
})

//2 similar nested events, prevents propogation on first mousedown
const text1 = document.querySelector(".text-content")
text1.addEventListener("mousedown", event=>{
    event.stopPropagation()
    text1.addEventListener("mousedown", event=>{
        text1.style.backgroundColor = "orange"    
    })
})

