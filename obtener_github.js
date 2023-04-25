let lista_valor = [];

function imprimir_promesa(data)
{
    let texto = document.getElementById('texto');
    let titulo_json = document.getElementById('titulo_json');
    let lista_json = document.getElementById('lista_json');
    let imagen = document.getElementById('imagen');
    let figcaption = document.getElementById('mifigcap');

    texto.innerText = "El Dueno de esta API es : " + data.name + ", y tiene : " + data.followers.toString() + " seguidores";
    figcaption.innerText = "Esta es su imagen de avatar";
    imagen.src = data.avatar_url;


    titulo_json.innerText = "Listado de llaves del API";
    lista_valor = []
    for (i in data)
    {
        cadena = i + " : " + data[i];
        console.log(cadena);

        var option = document.createElement("option");
        option.text = i;
        lista_json.add(option);
        lista_valor.push(data[i]);
    }


}

function obtener_github()
{
    fetch("https://api.github.com/users/adion81")
    .then(response => response.json() )
    .then(coderData => imprimir_promesa(coderData))
    .catch(err => console.log(err) )
}


function lista_cambio(){
    let miselect = document.getElementById("lista_json");
    let valor = document.getElementById('valor');
    valor.innerText = lista_valor[miselect.selectedIndex];
}