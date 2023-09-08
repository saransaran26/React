async function foo(){
    var res = await fetch("http://api.citybik.es/v2/networks")
    var result = await res.json()
    console.log(result)
  
      for(let i=0;i<50;i++){
        var div = document.createElement("div")
        div.innerHTML = `<div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name : ${result.networks[i].name}</h5>
              <h5 class="card-title">ID : ${result.networks[i].id}</h5>
              <h5 class="card-title">Company : ${result.networks[i].company}</h5>
              <h5 class="card-title">City : ${result.networks[i].location.city}</h5>  
            </div>
          </div>
        </div>
        </div>`

      document.body.append(div)
      
    }
     
}
foo()