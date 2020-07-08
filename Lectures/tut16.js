console.log("tut16")
// creating element through js
let elems = document.createElement("li")
elems.className= "child"
elems.id="create"
elems.setAttribute('color','white')
elems.innerText="Happy Birthday"

// console.log(elems)
let cont = document.querySelector('.query')
cont.append(elems)
// console.log(cont)
let elems2 = document.createElement("h3")
let tnode = document.createTextNode("i dont know how to react with him")
elems2.appendChild(tnode)
elems2.className = "elems"
elems2.id="elems"

console.log(elems2)
// elems.replaceWith(elems2)
let conta =document.getElementById("myfirst")
console.log(conta)
// conta.replaceChild(elems2,document.getElementById("heading"))
// conta.removeChild(document.getElementById())
pr= elems.hasAttribute("color")
elems.removeAttribute("id")
console.log(pr,elems)