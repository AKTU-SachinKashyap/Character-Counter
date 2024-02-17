// import logo from './logo.svg';

import './App.css';
import Navbar from './Text/Navbar';
import React, { useState } from 'react';
import TextForm from './Text/TextForm';
import Alert from './Text/Alert';
import About from './Text/About'
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 


  
const Textulit = () => {
  const [Mode, setMode]= useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert = (massge, type)=>{
    setAlert({
      msg: massge,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  } 
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode =(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (

   /* <>
    <BrowserRouter>
    <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils Word Counter, Character Counter, Remove extra spaces" Mode={Mode} />}></Route>
        <Route exact path='/' element={<About Mode={Mode}/>}></Route>
        <Route exact path='/' element={<Alert alert={alert}/>}></Route>
        </Routes> 
       </BrowserRouter>
      </>*/


    <div className="App">
        {/* <Navbar title="Textulit" aboutText="About TextUtil"  />    */}
        <Alert alert={alert}/>
        <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <TextForm showAlert={showAlert} heading="Try TextUtils Word Counter, Character Counter, Remove extra spaces" Mode={Mode} />
        {/* <About Mode={Mode}/> */}
    </div>
  );
}
export default Textulit;





/*
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

import React, { Component } from 'react'
import News from './component/News';
import Navbar from './component/Navbar';

export default class App extends Component {

  pageSize=24;
  render() {
    return (
    
      // <div>
      //   <Navbar/>
      //   <News pageSize={this.pageSize} country="in" category="technology" /> 
      // </div>
 


      
        <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country="in" category="general"/> } ></Route>
            <Route exact path='/business'  element={<News key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science" />}> </Route>
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes> 
       </BrowserRouter>
      </>

    )
  }
}*/