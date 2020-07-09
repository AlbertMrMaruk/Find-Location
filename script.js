const btn = document.querySelector("#btnClick");
const input = document.querySelector(".form-control-lg");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  event();
});
window.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.keyCode == "13") {
    event();
  }
});
const ajax = new Ajax();
const ui = new Ui();
const carta = new Carta();
function event() {
  ajax
    .get(
      `https://api.airvisual.com/v2/states?country=${input.value}&key=ac38d4ad-3698-445f-9fc2-78d8bcfa482a`
    )
    .then((resp) => {
      if (JSON.parse(resp).status == "success") {
        if (document.querySelector("#card1").style.display == "none") {
          ui.create(JSON.parse(resp).data, input.value);
          document
            .querySelector("#cityBtn")
            .addEventListener("click", function (e) {
              e.preventDefault();
              city(input.value, document.querySelector("#city").value);
            });
        } else {
          ui.delete();
          ui.create(JSON.parse(resp).data, input.value);
          document
            .querySelector("#cityBtn")
            .addEventListener("click", function (e) {
              e.preventDefault();
              console.log(document.querySelector("#city"));
              city(input.value, document.querySelector("#city").value);
            });
        }
      } else {
        ui.deleteAll();
      }
    });
}
function city(country, state) {
  ajax
    .get(
      `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=ac38d4ad-3698-445f-9fc2-78d8bcfa482a`
    )
    .then((cities) => {
      if (JSON.parse(cities).status == "success") {
        ui.createCity(JSON.parse(cities).data, state);
        document
          .querySelector("#lanBtn")
          .addEventListener("click", function (e) {
            e.preventDefault();
            adress(country, state, document.querySelector("#lan").value);
          });
      } else {
        ui.deleteCities();
      }
    });
}
function adress(country, state, city) {
  ajax
    .get(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=ac38d4ad-3698-445f-9fc2-78d8bcfa482a`
    )
    .then((resp) => {
      if (JSON.parse(resp).status == "success") {
        carta.create(
          JSON.parse(resp).data.location.coordinates[0],
          JSON.parse(resp).data.location.coordinates[1]
        );
      } else {
        ui.deleteAdress();
      }
    });
}
