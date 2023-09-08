
let input = document.getElementById("input")

let ans = document.getElementById("ans")

function display(num){
    input.innerHTML += num
}

function cal(){
    let output = eval(input.innerHTML)
    ans.value = output
}

function c(){
    input.innerHTML = '';
    ans.value = ""
}

function del(){
    console.log("hello");
    let inp = input.innerHTML = input.innerHTML.slice(0,-1)
    input.innerHTML = inp;
}