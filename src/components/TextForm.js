import React, {useState} from 'react'


export default function TextForm(props) {


    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("all cleared","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied successfully","success");
    }
    const handleSpace = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(""))
        props.showAlert("spaces deleted","success");
    }
     const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    
    
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  placeholder="Enter a text" style={{backgroundColor:props.mode==='dark'?'rgb(14,24,42)':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleUpClick}><strong>Uppercase</strong></button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleLoClick}><strong>Lowercase</strong></button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleClearClick}><strong>Clear</strong></button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}><strong>Copy</strong></button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleSpace}><strong>Remove Spaces</strong></button>
            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length}words and {text.replace(/\s/g, '').length}characters</p>
            <p>{0.008* text.split(" ").filter((elem)=>{return elem.length!==0}).length } Minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
            
        </div>
        </>
    )
}
