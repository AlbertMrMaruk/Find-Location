class Ajax {
  // constructor(country, key){
  //     this.country = country;
  //     this.key = key;
  // }
  async get(url) {
    let resp = await fetch(url);
    let data = await resp.json();
    return JSON.stringify(data);
  }
}
