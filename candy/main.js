
var baseUrl = 'http://its.teknikum.it/api/candy_daniel'


fetch(baseUrl).then((data) => data.json()).then(data => {
 data.forEach(candy => {
  var $candy = new Candy(candy)
  $(document.body).append($candy.element)
 });
});


fetch(baseUrl, {
 method: "POST",
 mode: "cors",
 cache: "no-cache",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ name: "awdwa", weight: 34 })

})

var addB = document.getElementById("addBtn")



class Candy {
 constructor(candy) {
  this.id = candy.id
  this.name = candy.name
  this.weight = candy.weight
  this.boilerPlate = `
            <h3>
                <div>
                    <div>id: ${candy.id}</div>
                    <div>name: ${candy.name}</div>
                    <div>weight: ${candy.weight}</div>
                    <div><button type="button">DELETE</button></div>
                </div>
            </h3>
        `
  this.element = $(this.boilerPlate)
  this.element.find("button").click(() => {
   fetch(`${baseUrl}/${this.id}`, {
    method: "DELETE",
   }).then(() => {
    this.element.remove()
   })
  })
 }
}


class RESTFasad {
 constructor(baseUrl) {

 }
}
