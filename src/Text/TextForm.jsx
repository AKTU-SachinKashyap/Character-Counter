import React, { useState } from 'react'

export default function TextForm(props) { 
    const [text, setText]=useState("");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to UpperCase", "success");
    }
    const handleClick = ()=>{
        console.log("Uppercase clicked " + text);
        let oldText = text.toLowerCase();
        setText(oldText)
        props.showAlert("Convert to LowerCase", "success");
    }
    const ClearText = ()=>{
        console.log("Uppercase clicked " + text);
        let newText=" ";
        setText(newText)
        props.showAlert("Clear to text", "success");
    }
    const CopyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to text", "success");
    }
    const Remove = ()=>{
        console.log("Uppercase clicked " + text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove to Speace", "success");
    }
    const handleOnChange =(event) => {
        setText(event.target.value)
    }



    

  return (
    <>
        <div className='container' style={{color : props.Mode === 'dark'?'white':'#024743'}} >
            <h2 className='mb-2'>{props.heading}</h2>
            <div className='mb-4'>
                <textarea className='form-control' id='myBox' value={text} onChange={handleOnChange} style={{background: props.Mode ==='dark'?'#13466e':'white', color : props.Mode === 'dark'?'white':'#024743' }} rows={5}></textarea>
            </div>
            {/* <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase </button> */}
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={ handleClick } >Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary  mx-2  my-1 " onClick={CopyText}>Convert to Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={Remove} >Remove to Space</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={ClearText}>Clear text </button>
        </div>
        <div className='container my-3' style={{color: props.Mode==='dark'?'white':'#024743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} charcters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
