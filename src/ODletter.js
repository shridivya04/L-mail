import React from 'react'
function ODletter() {
  return (
    <container className='leave'>
    <form className='justify-content'>
      <h1>OD Form<span>here</span></h1>
      <input type="text" name="name" id="" placeholder='name'/>
      <input type="text" name="regno" id="" placeholder='regno'/>
      <input type="mail" name="mail" id=""/>
      {/* <input type="text" name="" id=""/> */}
      <textarea name="message" id="" cols="38" rows="18"/>
    <button type='submit'>Send</button>
    </form>
    </container>
  )
}
export default ODletter