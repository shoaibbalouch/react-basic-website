import { useState } from "react"

function Textform() {
  const [Text, settext] = useState('');

  const handleOnchange=(Event)=>{
    settext(Event.target.value)
  }
  const handleupclick=()=>{
    console.log("upper case click"+Text)
    let newText= Text.toUpperCase();
    settext(newText);
  }
  const handleloclick=()=>{
    let newText= Text.toLowerCase();
    settext(newText);
  }
  const handlecopyclick=()=>{
    let Text=document.getElementById("exampleFormControlTextarea1");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  }
  const handlespaceclick=()=>{
    let newText=Text.split(/[ ]+/);
    settext(newText.join (" "));
  }
  const handleClearclick=()=>{
    let newText='';
    settext(newText);
  }





  return (
    <>
  <div>
  <div className="mb-3">
    <h1> Enter the text </h1>
  <textarea className="form-control"value={Text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>  
<button type="button" className="btn btn-primary mx-2"onClick={handleupclick}>convert to uppercase</button> 
<button type="button" className="btn btn-warning mx-2"onClick={handleloclick}>convert to lowercase</button> 
<button type="button" className="btn btn-danger mx-2"onClick={handlecopyclick}>copy text</button>
<button type="button" className="btn btn-danger mx-2"onClick={handlespaceclick}>Extra space</button>
<button type="button" className="btn btn-primary mx-2"onClick={handleClearclick}>Clear</button> 
    </div>
    <div className="container my-2">
      <h2>your text summary</h2>
      <p> {Text.split(" ").length} words and {Text.length} characters</p>
      <p> {0.008 * Text.split(" ").length} minutes read</p>
      <h2> preview </h2>
      <p> {Text}</p>
    </div>
    </>
  )
}

export default Textform
