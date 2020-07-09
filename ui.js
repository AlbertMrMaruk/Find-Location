class Ui {
  create(data, country) {
    document.querySelector(
      "#card1 .card-header h4"
    ).innerText = `States in ${country.toLowerCase()}`;
    document.querySelector("#card1").style.display = "";
    data.forEach((e) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = `<a style="cursor: pointer;" id="state">State: ${e.state}</a>`;
      document.querySelector("#ulList").appendChild(li);
    });
    let res = document.createElement("li");
    res.className = "list-group-item";
    res.innerHTML = `
    <div class="input-group">
    <div class="input-group-prepend">
    <button class="btn btn-dark" style="cursor: default">Cities in: </button>
    </div>
    <input class="form-control" placeholder="Please type a state" id="city">
    <div class="input-group-append">
    <button class="btn btn-dark" id="cityBtn">Search</button>
    </div>
    </div>`;
    document.querySelector("#ulList").appendChild(res);
  }
  delete() {
    document.querySelectorAll("#ulList li").forEach((e) => e.remove());
  }
  deleteAll() {
    document.querySelector("#card1").style.display = "none";
    document.querySelector("#card2").style.display = "none";
    document.querySelector("#map").style.display = "none";
    document.querySelector("#alert1").style.display = "";
    setTimeout(function () {
      document.querySelector("#alert1").style.display = "none";
    }, 2000);
  }
  createCity(data, state) {
    document.querySelector(
      "#card2 .card-header h4"
    ).innerText = `Cities in ${state.toLowerCase()}`;
    document.querySelector("#card2").style.display = "";
    data.forEach((elem) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = `<a style="cursor: pointer;" id="state">City: ${elem.city}</a>`;
      document.querySelector("#ulList2").appendChild(li);
    });
    let res = document.createElement("li");
    res.className = "list-group-item";
    res.innerHTML = `
    <div class="input-group">
    <div class="input-group-prepend">
    <button class="btn btn-dark" style="cursor: default">Map for: </button>
    </div>
    <input class="form-control" placeholder="Please type a city" id="lan">
    <div class="input-group-append">
    <button class="btn btn-dark" id="lanBtn">Search</button>
    </div>
    </div>`;
    document.querySelector("#ulList2").appendChild(res);
  }
  deleteCities() {
    document.querySelector("#card2").style.display = "none";
    document.querySelector("#alert2").style.display = "";
    setTimeout(function () {
      document.querySelector("#alert2").style.display = "none";
    }, 2000);
  }
  deleteAdress() {
    document.querySelector("#map").style.display = "none";
    document.querySelector("#alert3").style.display = "";
    setTimeout(function () {
      document.querySelector("#alert3").style.display = "none";
    }, 2000);
  }
}
