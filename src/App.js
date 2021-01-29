import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import useResizeAware from 'react-resize-aware';


function App() {
  const customReporter = target => ({
    clientWidth: target != null ? target.clientWidth : null,
  });


  const [resizeListener, sizes] = useResizeAware(customReporter);

  const getClassName = (clientWidth) => {
    let classNames = '';

    if(clientWidth < 300){
      classNames += "red-div";
    }else if(clientWidth > 300){
      classNames += "green-div";
    }
    return classNames;
  }

  return (

    <div id="AggregateWidget" 
    style={{ position: 'relative'}}>
      {resizeListener}
      <div 
        className={`testimonials ${getClassName(sizes.clientWidth)}`}
        style={{ width: '400px', height: '200px'}}  
      >
        <h1>Container Width:{sizes.clientWidth}px</h1>
      </div>
    </div>
  );
};

export default App;
