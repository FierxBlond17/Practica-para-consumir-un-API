function search() {

  alert("por problemas de la api solo puedes buscar cartas con el numero identificador de las cartas")
  
  document.getElementById("cardsCont").style.display = "inline-block";
  
   
  let busca = "";
  busca += `<input type="text" class="inpCards" id="inpBrsr" placeholder="Buscar carta" onkeyup="getCardNew()"></input>`;

  document.getElementById("browser").innerHTML = busca;
  document.getElementById("lupa").remove();

  let cross = "";
  cross += `<img src="img/lupaCruz.png" class="lupaCross" id="lupaCross" onclick="delbrsr()"></img>`;
  document.getElementById("cross").innerHTML = cross;

  //document.getElementById("").remove();
  document.getElementById("presentation").remove();
}

function delbrsr() {
  document.getElementById("lupaCross").remove();
  document.getElementById("inpBrsr").remove();

  let cLupa = "";
  cLupa += `<img class="icons lupa" id="lupa" src="img/lupa.png" onclick="search()">`;
  document.getElementById("cross").innerHTML = cLupa;

  
}

function getCardNew() {
  fetch(urlApi)
    .then((res) => res.json())
    .then((result) => {

      var nameCard = document.getElementById("inpBrsr").value;
      
      let cardNew = "";
      cardNew += `<div class="countCard" id="countCard"> <h2>${result.data[nameCard].name}</h2>`;
      cardNew += `<img class="imgCards" src=${result.data[nameCard].card_images[0].image_url}>`;
      cardNew += `<p>Tipo: ${result.data[nameCard].type}</p>`;
      cardNew += `<p>Set: ${result.data[nameCard].card_sets[0].set_name}</p>`;
      cardNew += `<p>Precio: $${result.data[nameCard].card_prices[0].cardmarket_price}</p>`;
      cardNew += `</div>`;

      document.getElementById("cardsCont").innerHTML = cardNew;
    })
}
