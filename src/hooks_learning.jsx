import React,{useState} from "react";

const App = () =>{

    const state = useState(); //hook in react
    // console.log(state);

    const [ count , setCount ] = useState(0); //current value, updated value, initial value

    let count = 1;

    const IncNum = () =>{
        setCount( count+1 );
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click me</button>
        </>
    );
};