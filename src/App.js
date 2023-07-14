import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App(props) {
  const [mode,setMode] = useState('light');
// const [alert,setAlert] = useState(null);
 // const showAlert=(message,type)=>{
   //    setAlert({
     //   msg: message,
       // type:type
       //})
      // setTimeout(() => {
       // setAlert(null);
       //},1500);
//  } 
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      //showAlert("enable has dark");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
     // showAlert("enable has light");
    }
  }

  return (
    <>
    <Navbar   mode={mode} toggleMode={toggleMode}/>
    
   <div className='container my-4'mode={mode}  >

   <Textform  heading="Enter the text to analyze" />
   
   </div>
   <div className='container my-5'  > 
   <About />
   </div>
    

    </>
    

  )
  } 
export default App
