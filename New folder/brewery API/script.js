async function foo(){
    var res = await fetch("https://api.openbrewerydb.org/v1/breweries/")
    var result = await res.json()
    // console.log(result);
    for(let i=0;i<result.length;i++){
        var div = document.createElement("div")
    div.innerHTML = `<div class="row row-cols-1 row-cols-md-3">
    <div class="col mb-4">
      <div class="card">
        <div class="card-body">
        <h5 class="card-title">Name : ${result[i].name}</h5>
          <h5 class="card-title">State : ${result[i].state}</h5>
          <h5 class="card-title"> City : ${result[i].city}</h5>
          <h5 class="card-title">Brewery Type : ${result[i].brewery_type}</h5>
          <h5 class="card-title">Address : ${result[i].address_1}</h5>
        </div>
      </div>
    </div>
    </div>`
    document.body.append(div)
    }
    
}
foo()