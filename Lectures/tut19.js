console.log("Session and Localstorage")
const arr =["manik",'nandu','navya','cabir']
localStorage.setItem('Name','Shivi')
localStorage.setItem('Name2','Vishi')
localStorage.setItem('name3','shubhi')
localStorage.setItem('list',JSON.stringify(arr))

// localStorage.clear()
let name = JSON.parse(localStorage.getItem('list'));
console.log(name)