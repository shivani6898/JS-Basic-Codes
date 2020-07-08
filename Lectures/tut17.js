console.log("events listener")
document.getElementById("heading").addEventListener("mouseover",function(e) {
    let variable
    console.log("you are clicking the heading")
      variable = e.target
      variable= Array.from(e.target.classList);
      variable = e.offsetX
      variable = e.clientX
    console.log(variable)
})