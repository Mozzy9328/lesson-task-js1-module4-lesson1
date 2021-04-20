const url= "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams"

const container = document.querySelector(".results")
async function newFunction(){
    try{
    const response = await fetch(url)

    const result = await response.json()

    const data = result.data

    container.innerHTML = "";

  

    for(i = 0; i <= data.length; i++){
        const name = data[i].name
        const city = data[i].city
        if(i <= 15){
        break;
    }
        if(name.startsWith("c") || name.startsWith("C")){ 
            continue;
        }

        container.innerHTML += 
            `<div class="card">
            <div> Name: ${name} </div>
            <div> City: ${city} </div>
            </div>`
    }
    }
catch(error){
    console.log(error)
}
}
newFunction();