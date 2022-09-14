let getData = async (url) => {
    let res = await fetch(url)
    let data = await res.json();
    //  data =data.sort((a,b) => {
    //     return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    // })
    return data
}



let append = (data, cont) => {
    cont.innerHTML = ""
    // let container = document.getElementById("container")
    data.forEach(({ strMealThumb, strMeal, strArea,strCategory }) => {
        let img = document.createElement("img")
        img.src = strMealThumb
        let t = document.createElement("p")
        t.innerHTML = `Meal:${strMeal}`
        let category = document.createElement("p")
        category.innerHTML = `Category: ${strCategory}`
        let area = document.createElement("p")
        area.innerText = `Area: ${strArea}`
        let div = document.createElement("div")
        div.setAttribute("id","cards")
        div.append(img, t, category,area)
        
        cont.append(div)
    })
}
let append2 = (data, cont) => {
    cont.innerHTML = ""
    // let container = document.getElementById("container")
    data.forEach(({ strMealThumb, strMeal}) => {
        let img = document.createElement("img")
        img.src = strMealThumb
        let t = document.createElement("p")
        t.innerHTML = `Meal:${strMeal}`
        let div = document.createElement("div")
        div.setAttribute("id","cards")
        div.append(img, t)
        
        cont.append(div)
    })
}
let append3 = (data, cont) => {
    cont.innerHTML = ""
    // let container = document.getElementById("container")
    data.forEach(({ strMealThumb, strMeal, strArea,strCategory,strInstructions }) => {
        let img = document.createElement("img")
        img.src = strMealThumb
        let t = document.createElement("p")
        t.innerHTML = `Meal:${strMeal}`
        let category = document.createElement("p")
        category.innerHTML = `Category: ${strCategory}`
        let area = document.createElement("p")
        area.innerText = `Area: ${strArea}`
        let instructions = document.createElement("p")
        instructions.innerText = `Instructions: ${strInstructions}`
        let box1 = document.createElement("div")
        box1.append(img,t,category,area)
        let box2 = document.createElement("div")
        box2.append(instructions)
        let div = document.createElement("div")
        div.setAttribute("id","cards")
        div.append(box1,box2)
        
        cont.append(div)
    })
}

export { getData,append,append2,append3}