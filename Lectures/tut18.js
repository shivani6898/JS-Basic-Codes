console.log("more event listener")
 let btn = document.getElementById("btn")
// btn.addEventListener("click",func1())
// function func1(e){
//     console.log("thanks for submiting",e);
//     e.preventDeafult();
// }
btn.addEventListener('mousemove',funct2)
function func2(e) {
    console.log("thnks")
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsety},${e.offsetX+e.offsetY})`
}