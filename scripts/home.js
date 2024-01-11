var heading = document.querySelector(".heading")
var objects = document.querySelector(".objects")

console.log(heading, objects)
window.addEventListener("mousemove", function(event){
    var positionX = event.clientX / 30
    var positionY = event.clientY / 30

    heading.style.transform = `translate(${positionX}px, ${positionY}px)`
})