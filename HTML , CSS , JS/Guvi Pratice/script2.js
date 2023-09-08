// export function main(){
//     console.log("hello");
//     console.log("saran");
// }

export class main{
    constructor(name){
        this.name = name
    }

    sayhello(){
        console.log("my name is",this.name);
    }
}

// const hello = new main("saran")
// hello.sayhello()