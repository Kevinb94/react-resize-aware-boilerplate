import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import useResizeAware from 'react-resize-aware';


function App() {
  const customReporter = target => ({
    clientWidth: target != null ? target.clientWidth : null,
  });

  const [header, setHeader] = useState('Welcome to React Hooks');
  const [backgroundColor, setBackgroundColor] = useState("#fff000");
  const [resizeListener, sizes] = useResizeAware(customReporter);

  



  const handleHeaderInput = e => {
    setHeader(e.target.value);
  };

  const handleSetBackgroundColor = e => {
    setBackgroundColor(e.target.value);
  }

  const getClassName = (clientWidth) => {
    let classNames = '';

    if(clientWidth < 300){
      classNames += "red-div";
    }else if(clientWidth > 300){
      classNames += "green-div";
    }
    return classNames;
  }

  React.useEffect(() => {
    console.log('Width: ' + sizes.width + ' Height: ' + sizes.height);

    if(sizes.width < 200){
      setBackgroundColor("green");
    }
  }, [sizes.width, sizes.height]);

  return (

    <div id="AggregateWidget" 
    style={{ position: 'relative', width: sizes.clientWidth }}>
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
