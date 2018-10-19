

class RESTFasad {
  constructor(url) {
    this.url = url
  }

  getCandy(successHandler){
    $.getJSON(this.url, successHandler)
  }

  createCandy(cName, cWeight) {
    $.ajax({
        type: "POST",
        url: this.url,
        data: {name: cName, weight: cWeight}

      })
  }

  deleteCandy(successHandler, candyId) {
    $.ajax({
        url: `${this.url}/${candyId}`,
        type: 'DELETE',
        success: successHandler
    })
  }

}


var restFasad = new RESTFasad('http://its.teknikum.it/api/candy_daniel')


$(document).ready(() => {
    restFasad.getCandy( (data) => {
        data.forEach(candy => {
            var $candy = new Candy(candy)
            $(document.body).append($candy.element)
        });
    });
})


restFasad.createCandy("awdwa", 34)



class Candy {
    constructor(candy){
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
          restFasad.deleteCandy(() => this.element.remove() , this.id)
        })
    }
}
