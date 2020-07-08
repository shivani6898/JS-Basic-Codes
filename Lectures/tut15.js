console.log("tut15")
let cont = document.querySelector('.container')
// console.log(cont.childNodes)
// console.log(cont.children)
let nodeName = cont.childNodes[0].nodeName
let nodeType = cont.childNodes[0].nodeType
// console.log(nodeName)
// console.log(nodeType)

// node type
// 1.Element
// 2.attribute
// 3.text node
// 8.comment
// 9.document
// 10.doc type

let conta = document.querySelector('.container')
// console.log(conta.children[1].children[0].children)

console.log(conta.firstChild)
console.log(conta.firstElementChild)
console.log(conta.lastChild)
console.log(conta.lastElementChild)
console.log(conta.childElementCount)
console.log(conta.children)
console.log(conta.firstElementChild.parentNode)
console.log(conta.firstElementChild.nextSibling)
console.log(conta.firstElementChild.nextElementSibling)
