import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("all cleared","success");
    }
    const handleCopy = ()=>{
        console.log("im copied");
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
        console.log("on change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    
    
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  placeholder="Enter a text" style={{backgroundColor:props.mode==='dark'?'rgb(58, 58, 107)':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-success mx-2" onClick={handleLoClick}>convert to lowercase</button>
            <button className="btn btn-success mx-2" onClick={handleClearClick}>clear</button>
            <button className="btn btn-success mx-2" onClick={handleCopy}>copy</button>
            <button className="btn btn-success mx-2" onClick={handleSpace}>remove spaces</button>
            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length } Minutes read</p>
            <h2>preview</h2>
            
        </div>
        </>
    )
}
