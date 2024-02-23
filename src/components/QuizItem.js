import React from 'react'

export default function QuizItem(props) {
  
  return (
    <div className="container">
      <h1>Question-{props.index+1}</h1>
      <div className="question">{props.element.question}</div>
      
      <div className="options">
      <div className="form-check">
  <input className="form-check-input" type="radio" name= {`flexRadioDefault-${props.index}`} id="A"  onChange={()=>{props.add("A")}}/>
  <label className="form-check-label" htmlFor={`flexRadioDefault-${props.index}`}>
    {props.element.A}
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name= {`flexRadioDefault-${props.index}`} id="B"  onChange={()=>{props.add("B")}}/>
  <label className="form-check-label" htmlFor={`flexRadioDefault-${props.index}`}>
    {props.element.B}
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name= {`flexRadioDefault-${props.index}`} id="C"  onChange={()=>{props.add("C")}}/>
  <label className="form-check-label" htmlFor={`flexRadioDefault-${props.index}`}>
    {props.element.C}
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name= {`flexRadioDefault-${props.index}`} id="D" onChange={()=>{props.add("D")}}/>
  <label className="form-check-label" htmlFor={`flexRadioDefault-${props.index}`}>
    {props.element.D}
  </label>
</div>
</div>
<button type="button" class="btn btn-primary" onClick={props.updateQuestion} >SUBMIT</button>
</div>

    
    )}

  

