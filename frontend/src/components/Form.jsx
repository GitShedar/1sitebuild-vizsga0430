import React from 'react'

const Form = () => {
  return (
    
       <form>      
              <input placeholder="Név" />
              <input placeholder="Email cím"/>
              <input placeholder="Telefonszám"/>
              <input type="checkbox" name="aszf"/>
              <label>Elfogadom az <a href="https://html-color-codes.info/colors-from-image"> Adatvédelmi Tájékoztatót </a></label>
               
              <button>Elküld</button>
              </form>    
    
  )
}

export default Form
