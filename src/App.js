
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   {/* <Navbar/> */}
 <Navbar title="TextUtils" textMe="my about"/>
 <div className="container my-3">
 <TextForm heading="Enter The Text Here"/>
 </div>
   </>
   
  );
}

export default App;
