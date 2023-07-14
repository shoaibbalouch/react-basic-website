import { useState } from "react"

function Textform(props) {
  const [Text, settext] = useState('');

  const handleOnchange=(Event)=>{
    settext(Event.target.value)
  }
  const handleupclick=()=>{
  //  console.log("upper case click"+Text)
    let newText= Text.toUpperCase();
    settext(newText);
    //props.showAlert("convert to uppercase","success");
  }
  const handleloclick=()=>{
    let newText= Text.toLowerCase();
    settext(newText);
    //props.showAlert("convert to lowercase","success");
  }
  const handlecopyclick=()=>{
    let Text=document.getElementById("exampleFormControlTextarea1");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    //props.showAlert(" Text copy","success");
  }
  const handlespaceclick=()=>{
    let newText=Text.split(/[ ]+/);
    settext(newText.join (" "));
    //props.showAlert(" extra remove space","success");
  }
  const handleClearclick=()=>{
    let newText='';
    settext(newText);
    //props.showAlert("Text Clear","sucess");
  }

  return (
    <>
  <div >
  <div className="mb-3"style={{backgroundColor:props.mode==='dark'?'white':'white'}}>
  <div>  <h1> {props.heading} </h1></div>

  <textarea className="form-control"value={Text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:"light"}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>  
<button type="button" className="btn btn-primary mx-2"onClick={handleupclick}>Convert to Uppercase</button> 
<button type="button" className="btn btn-warning mx-2 my-2"onClick={handleloclick}>Convert to Lowercase</button> 
<button type="button" className="btn btn-danger mx-2 my-2"onClick={handlecopyclick}>Copy Text</button>
<button type="button" className="btn btn-danger mx-2 my-2"onClick={handlespaceclick}>Extra Space</button>
<button type="button" className="btn btn-primary mx-2 my-2"onClick={handleClearclick}>Clear</button> 
    </div>
    <div className="container my-2">
      <h2>your text summary</h2>
      <p> {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
      <p> {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2> preview </h2>
      <p> {Text}</p>
    </div>
    </>
  )
  }

export default Textform
