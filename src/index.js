// to use jsx we import react module
import React from 'react';

// to use render method of react-dome module 
import ReactDom from 'react-dom';

// importing css
// import "./index.css";

// importing Heading.jsx file as component 
// import Heading from "./Heading";

// importing Paragraph.jsx file as component 
// import Paragraph from "./Paragraph";

// importing List.jsx file as component 
// import List from "./List";

// importing App.jsx file as component 
// import App from "./App.jsx";

// importing App1.jsx file as component 
// import name1, {name2,myName1,myName2} from "./App1";
// import * as obj from "./App1";

// importing Card.jsx file as component
// import Card from "./Card";

// to use render method of react-dome module 
// import add from './Calc';
// import {sub,mul,div} from './Calc';
import Calculate from './Calculate.jsx';

// we can write it like this
// var React = require('react');
// var ReactDom = require('react-dom');

// to produce jsx output at particular html id
// ReactDom.render(
// <div>
// <h1>heading tag</h1>
// <p>paragraph tags</p>
// </div>, 
// document.getElementById('root'));

// to produce jsx output at particular html id
// ReactDom.render(
// [
//   <h1>heading tag</h1>,
//   <p>paragraph tags</p>
// ], 
// document.getElementById('root'));

// to produce jsx output at particular html id
// ReactDom.render(
// <React.Fragment>
//   <h1>heading tag</h1>
//   <p>paragraph tags</p>
// </React.Fragment>,
// document.getElementById('root'));


// to produce jsx output at particular html id
// ReactDom.render(
// <>
//   <h1>heading tag</h1>
//   <p>paragraph tags</p>
// </>,
// document.getElementById('root'));

// to produce jsx output at particular html id
// const fname="Ashwani";
// const lname="Kumar";

// to get current date
// const curr_date=new Date().getDate();

// to get current hour
// const curr_date=new Date().getHours();

// to get current full date
// const curr_date=new Date().toLocaleDateString();

// to get current full time
// const curr_time=new Date().toLocaleTimeString();

// ReactDom.render(
//   <>
//     <h1>{1+2}, {1-2}, {1*2}, {1/2}, {Math.random()}, {fname + " " + lname}, {curr_date} , {curr_time}</h1>
//     <h1>{`my name is ${fname} ${lname}`}</h1>
//   </>,
// document.getElementById('root'));

// const img1="";
// const img2="";
// const img3="";
// const link="";
// const same_page_css={
//   color:"red",
//   textTransform:"capitalize",
//   textAlign:"center"
// };


// to produce jsx output at particular html id
// ReactDom.render(
// using contentEditable global html attribute
// <div contentEditable="true" className="div_tag">
//<h1 className="head_tag">heading tag</h1>
//<img className="image_tag" src={img1} alt="image 1"></img>
//<img className="image_tag" src={img2} alt="image 2"></img>
//<a href={link}>
//  <img className="image_tag" src={img3} alt="image 3"></img>
//</a>

//using inline css
//<h2 style={{color:"red",textTransform:"capitalize",textAlign:"center"}}>using inline css</h2>


//using same page css
//<h2 style={same_page_css}>using samepage css</h2>
// </div>, document.getElementById('root'));

// ReactDom.render(<App/>,document.getElementById('root'));


// ReactDom.render(<><p>{name1}</p><p>{name2}</p><p>{myName1()}</p><p>{myName2()}</p></>,document.getElementById('root')); 
// ReactDom.render(<><p>{obj.default}</p><p>{obj.name2}</p><p>{obj.myName1()}</p><p>{obj.myName2()}</p></>,document.getElementById('root')); 


// function Card(props){
//     return(
//         <>
//             <div className="">
//                 <div className="">
//                     <img className="" src="{props.imgsrc}" alt="myPic"></img>
//                     <div className="">
//                         <span className="">{props.title}</span>
//                         <h3 className="">{props.sname}</h3>
//                         <a href="{props.link}">
//                             <button>click here</button>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// ReactDom.render(
//     <>
//       <Card imgsrc="" title="" sname="" link=""/>
//       <Card imgsrc="" title="" sname="" link=""/>
//       <Card imgsrc="" title="" sname="" link=""/>
//       <Card imgsrc="" title="" sname="" link=""/>
//     </>,
//     document.getElementById('root')
// );


// making a calculator
ReactDom.render(<Calculate/>,document.getElementById('root'));