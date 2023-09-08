



function display(){
    let firstname = document.getElementById("firstname").value
let lastname = document.getElementById("lastname").value
let address1 = document.getElementById("address1").value
let address2 = document.getElementById("address2").value
let pincode = document.getElementById("validationTooltip05").value
let state = document.getElementById("validationTooltip04").value
let city = document.getElementById("validationTooltip03").value


let outputfirstname = document.getElementById("outputfirstname")
let outputlastname = document.getElementById("outputlastname")
let outputaddress1 = document.getElementById("outputaddress1")
let outputaddress2 = document.getElementById("outputaddress2")
let outputpincode = document.getElementById("outputpincode")
let outputstate = document.getElementById("outputstate")
let outputcity = document.getElementById("outputcity")


outputfirstname.innerHTML = firstname
    outputlastname.innerHTML = lastname
    outputaddress1.innerHTML = address1
    outputaddress2.innerHTML = address2
    outputpincode.innerHTML = pincode
    outputstate.innerHTML = state
    outputcity.innerHTML = city

let outputgender = document.getElementById("outputgender")
let radio1 = document.getElementById("customRadioInline1").checked
let radio2 = document.getElementById("customRadioInline2").checked
if(radio1){
    outputgender.innerHTML = "Male"
}
else if(radio2){
    outputgender.innerHTML = "Female"
}


let check1 = document.getElementById("exampleCheck1").checked
console.log(check1)
let check2 = document.getElementById("exampleCheck2").checked
let check3 = document.getElementById("exampleCheck3").checked
let check4 = document.getElementById("exampleCheck4").checked
let outputfood = document.getElementById("outputfood")
let arr=["Chicken Briyani","parotta","Egg Fried Rice","Mutton Briyani"]
let ansarr = []
for(let i=0;i<4;i++){
    if(check1){
        ansarr.push(arr[0])
        check1 = false
    }
    else if(check2){
        ansarr.push(arr[1])
        check2 = false
    }
    else if(check3){
        ansarr.push(arr[2])
        check3 = false
    }
    else if(check4){
        ansarr.push(arr[3])
        check4 = false
    }
}
console.log(ansarr)
if(ansarr.length>=2){
    outputfood.innerHTML = ansarr
}
else{
    alert("You must choose 2 Food")
}

}
