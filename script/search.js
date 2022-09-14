import nav from '../component/navbar.js'
document.getElementById("navbar").innerHTML = nav()

let currentUser = JSON.parse(localStorage.getItem("currArr")) || false
console.log(currentUser)
if (currentUser !== false) {

      document.getElementById("currUser").innerHTML = `Welcome ${currentUser.name} !`

}

import { getData,append,append2 } from "./fetch.js"

let currurl = "https://themealdb.com/api/json/v1/1/search.php?s="



document.getElementById("search").addEventListener("click" ,search)

let cont = document.getElementById("container")

function search(){
      let query = document.getElementById("query").value;
      // console.log(query)
      let url = `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
      getData(url).then(function(res){
            console.log(res)
            append(res.meals,cont)
      })
}



getData(currurl).then(function(res){
      console.log(res)
      append(res.meals,cont)
})


// filter
//italian
document.getElementById("italian").addEventListener("click",function(){
      let italian ="https://themealdb.com/api/json/v1/1/filter.php?a=Italian"
      getData(italian).then(function(res){
            console.log(res)
            append2(res.meals,cont)
      })
      
})

// indian
document.getElementById("indian").addEventListener("click",function(){
      let indian ="https://themealdb.com/api/json/v1/1/filter.php?a=Indian"
      getData(indian).then(function(res){
            console.log(res)
            append2(res.meals,cont)
      })
      
})
document.getElementById("amarican").addEventListener("click",function(){
      let amarican ="https://themealdb.com/api/json/v1/1/filter.php?a=American"
      getData(amarican).then(function(res){
            console.log(res)
            append2(res.meals,cont)
      })
      
})
document.getElementById("irish").addEventListener("click",function(){
      let irish ="https://themealdb.com/api/json/v1/1/filter.php?a=Irish"
      getData(irish).then(function(res){
            console.log(res)
            append2(res.meals,cont)
      })
      
})
document.getElementById("egypt").addEventListener("click",function(){
      let egypt ="https://themealdb.com/api/json/v1/1/filter.php?a=Egyptian"
      getData(egypt).then(function(res){
            console.log(res)
            append2(res.meals,cont)
      })
      
})
document.getElementById("japan").addEventListener("click",function(){
      let japan ="https://themealdb.com/api/json/v1/1/filter.php?a=Japanese"
      getData(japan).then(function(res){
            console.log(res)
            append2(res.meals,cont)
      })
      
})