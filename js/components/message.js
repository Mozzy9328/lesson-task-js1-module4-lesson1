function message(messageType = "success", message = "") {
    return `<div class="alert ${messageType}">${message}</div>`;
}


const url2 = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/6";

async function getMessage(){
    const response = await fetch(url2)
    const data = await response.json()

    console.log(data)

    const nameUrl2 = data.name
    const imageUrl2 = data.img 
    const statusUrl2 = data.status 

    container.innerHTML += 
    `<div class="card">
    <div> Status: ${statusUrl2} </div>
    <div> Name: ${nameUrl2} </div>
    <div> <img src= "${imageUrl2}"> </div>
    </div>`
}

getMessage();