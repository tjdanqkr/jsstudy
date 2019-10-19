import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent.js';
import EventPractice from './EventPractice.js';
import VaildationSample from './VaildationSample.js';
import ScrollBox from './ScrollBox.js';

class App extends Component{
  render(){
    const text ='당신은 어썸한가요?';
    const condition = true;
    const style={
      backgroundColor : 'gray',
      border : '1px solid black',
      height: Math.round(Math.random()*300)+50,
      width: Math.round(Math.random()*300)+50,
      WebkitTransition:'all',
      MozTransition: 'all',
      msTransition:'all'
    };
    return(
      /*
      <div className="my-div">
        
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          condition ? '참' : '거짓'
        }
        {condition && '보여주세요'}
        <div style={style}></div>
        <div>
           주석 안됨 
          //안됨<br/>
          <input type='text' name='first name'></input><br/>
          <input type='text' name='last name'></input>
        </div>
      </div>
      */
     /*<div>
       <MyComponent age={2} />

     </div>*/
     /*<div>
       <EventPractice></EventPractice>
     </div>*/
     /*<div>
       <VaildationSample></VaildationSample>
     </div>*/
     <div>
      <ScrollBox ref={(ref)=>this.ScrollBox=ref}></ScrollBox>
      <button onClick={()=>this.ScrollBox.scrollToBottom()}> 맨밑으로</button>
     </div>
    );
  }
}

export default App;