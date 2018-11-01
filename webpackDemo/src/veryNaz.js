
export default class Modalerator {

  constructor(id) {
    this.element = document.getElementById(id)
  }

  show(){
    this.element.classList.add("is-active")
  }

  hide(){
    this.element.classList.remove("is-active")
  }

}
