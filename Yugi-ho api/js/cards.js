const urlApi = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function getCards(max) {
  fetch(urlApi)
    .then((res) => res.json())
    .then((result) => {
      
      if (max > 1) {
        var maxCard = 8 + max;
      } else {
        var maxCard = 8;
      }

      var minCard = max + -8;

      let output = "";

      for (let i = 0; i < maxCard; i++) {
        output += `<div class="cont" id="cardDiv" onclick="modalCard(${[i]})"><h2>${result.data[i].name}</h2>`;

        output += `<img class="imgCards" src=${result.data[i].card_images[0].image_url}></div>`;
      }
      output +=
        `<div class="minMor"><p class="moreCards" onclick="getCards(` +
        maxCard +
        `)">+</p>`;
      output +=
        `<p class="moreCards" onclick="getCards(` + minCard + `)">-</p></div>`;
      document.getElementById("cardsCont").innerHTML = output;
    })
    .catch((err) => console.log(err));

    document.getElementById("cardsCont").style.display = "inline-block";
    document.getElementById("presentation").remove();
    document.getElementById("contactos").remove();
    document.getElementById("browser").style.height = "1px";
}

function modalCard(num) {
  fetch(urlApi)
    .then((res) => res.json())
    .then((result) => {
      
      let mdl = "";
      mdl += `<div class="divModal"><h2>${result.data[num].name}</h2>`;
      mdl += `<img class="imgCard" src=${result.data[num].card_images[0].image_url}>`;
      mdl += `<p>Tipo: ${result.data[num].type}</p>`;
      mdl += `<p>Set: ${result.data[num].card_sets[0].set_name}</p>`;
      mdl += `<p>Precio: $${result.data[num].card_prices[0].cardmarket_price}</p></div>`;

      document.getElementById("cardsCont").innerHTML = mdl;
    });
}
