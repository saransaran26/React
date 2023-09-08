let defaultname = [
    {name:"saran",age:21},
    {name:"john",age:26}
]
function displaydata(){
    const datarow = document.getElementById("datarow")
    datarow.innerHTML = ''

    defaultname.forEach((item,index)=>{
        const row = `
        <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>
            <button class="btn btn-info" index="${index}">Edit</button>
            <button class="btn btn-danger" index="${index}">Delete</button>
        </td>
    </tr>
      `
      datarow.insertAdjacentHTML("beforeend", row)

    })
}

function handleformsubmit(event){
    event.preventDefault()
    console.log("clicked")
    
    let named = document.getElementById("name")
    let aged = document.getElementById("age")

    let name = named.value.trim()
    let age = parseInt(aged.value)
    defaultname.push({name , age})
    named.value=""
    aged.value = ""
    displaydata()
}

document
.getElementById("crudform")
.addEventListener("submit",handleformsubmit)

function deleteclick(event){
    const index = event.target.getAttribute("index")
    defaultname.splice(index,1)
    displaydata()
    // alert("deleteclicked")
}

function editclick(event){
    const index = event.target.getAttribute("index")
    const ans = defaultname[index]
    

    let named = document.getElementById("name")
    let aged = document.getElementById("age")

    named.value = ans.name
    aged.value = ans.age

    defaultname.splice(index,1)
    displaydata()


}

document.getElementById("datarow")
.addEventListener("click",(event)=>{
    if(event.target.classList.contains("btn-danger")){
        deleteclick(event)
    }
    else if(event.target.classList.contains("btn-info")){
        editclick(event)
    }
    
    
})

displaydata()