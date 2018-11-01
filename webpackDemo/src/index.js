import Modalerator from './veryNaz'

window.onload = () =>{
  let md = new Modalerator('bmd')
  document.getElementById('bttnS').addEventListener('click',() => {
    md.show()
  })
  document.getElementById('bttnC').addEventListener('click',() => {
    md.hide()
  })

}
