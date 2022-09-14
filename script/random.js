import nav from '../component/navbar.js'
document.getElementById("navbar").innerHTML = nav()


import { getData,append3 } from "./fetch.js"

let currurl = "https://www.themealdb.com/api/json/v1/1/random.php"
let cont = document.getElementById("container")

getData(currurl).then(function(res){
    console.log(res)
    append3(res.meals,cont)
})