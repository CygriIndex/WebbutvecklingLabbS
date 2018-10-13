$(document).ready(() => {
    $.getJSON('http://its.teknikum.it/api/candy_daniel', (data) => {
        data.forEach(candy => {
            var $candy = new Candy(candy)
            $(document.body).append($candy.element)    
        });
    });
})

$.ajax({
    type: "POST",
    url: 'http://its.teknikum.it/api/candy_daniel',
    data: {name: "awdwa", weight: 34}

  })

var addB = document.getElementById("addBtn")



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
            $.ajax({
                url: `http://its.teknikum.it/api/candy_daniel/${this.id}`,
                type: 'DELETE',
                success: () => {
                    this.element.remove()
                }
            })
        })
    }
}


//var candyName = ["Gummibjörn", "Lakritssrem", "Polkagris", "Chokladägg", "Nötcreme", "Punchpralin", "Surskalle"]