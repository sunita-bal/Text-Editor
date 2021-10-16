
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 2000);
}

  const toggleMode = ()=>{
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode ON","success");
      // document.title = 'TextUtlis - Dark Mode';
      // setInterval(()=>{
      //   document.title='install this App';
      // }, 1000);
      //  setInterval(()=>{
      //   document.title='load this page';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Dark mode OFF","success");
      // document.title = 'TextUtlis - light Mode';
    }
  }
  return (
   <>
   {/* <Navbar/> */}
{/* <Router> */}
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
          {/* </Route> */}
        {/* </Switch> */}
        <TextForm showAlert={showAlert} heading="TextUtlis - Text Editor, Word Counter, Character Counter" mode={mode}/>
        {/* </About> */}
 </div>
// {/* </Router> */}
 
   </>
   
  );
}

export default App;
