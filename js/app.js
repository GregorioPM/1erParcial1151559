

async function traerDatos(){
    console.log("alv");
    const datos = await fetch(
        "https://www.datos.gov.co/resource/gt2j-8ykr.json"
    );
    const datosJson = await datos.json();
    
    let tabla = document.getElementById("bodyTable");
    let content = ``;
    for (let i = 0; i < 25; i++) {
        content += `<tr>
            <td>${datosJson[i].fecha_de_notificaci_n}</td>
            <td>${datosJson[i].ciudad_de_ubicaci_n}</td>  
            <td>${datosJson[i].atenci_n}</td> 
            <td>${datosJson[i].edad}</td> 
            <td>${datosJson[i].sexo}</td> 
            <td>${datosJson[i].tipo}</td>
            <td>${datosJson[i].estado}</td>
            <td>${datosJson[i].ubicaci_n_recuperado}</td>   
        </tr>`;
    }
    tabla.innerHTML = content;
}

traerDatos();




