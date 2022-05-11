let person = document.getElementById("person")
let money = document.getElementById("money")
let tip = document.getElementById("tip")
let btn = document.getElementById("btn")
let conalert = document.getElementById("conalert")
let copyright = document.querySelector('.copyright') 
btn.addEventListener("click",
()=>{
  
 let tipcal = (money.value * tip.value)/100
 let tiphal = tipcal / person.value
 
 conalert.innerText = `Total : ${tiphal} $`
})

copyright.onclick = () => { alert("All rights reseved by Abdelrahman \n Hireme: abdelrahmanshaheen2007@gmail.com") }
