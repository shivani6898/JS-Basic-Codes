console.log("tut14")
// single element slector
// let element = document.getElementById("first") 
// element=element.childNodes
// element=element.className
// element=element.parentNode
// element.style.color="red"
// element.innerText="hello,this is shivi"
// element.innerHTML="<h1>hi</h1>"

// console.log(element)
// let sel = document.querySelector("#first")
// let sel = document.querySelector(".class")
// let sel = document.querySelector("div");
// sel.style.backgroundColor="green";
// console.log(sel)

// multi element selector

let elems = document.getElementsByTagName("div")
Array.from(elems).forEach(elements =>{
    console.log(elements)
})
console.log(elems)



