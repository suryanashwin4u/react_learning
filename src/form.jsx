import React,{useState} from 'react';
const Form = () =>{

    const [firstname,setfirstName] = useState("");
    const [lastname,setlastName] = useState("");
    const [fullName,setfullName] = useState();

    const inputEvent1 = (event) =>{
        setfirstName(event.target.value); //event starts every onchange function call
    };

    const inputEvent2 = (event) =>{
        setlastName(event.target.value);  //event starts every onchange function call
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        setFullname( firstname+" "+lastname );        
    }

    return(
        <>
            <form onClick={onSubmit}>
                <div>
                    <h1>Hello,{fullName}</h1>
                    <input name="fname" type="text" placeholder="enter your first name" onChange={inputEvent1} value={firstname}/>
                    <br/>
                    <input name="lname" type="text" placeholder="enter your last name" onChange={inputEvent2} value={lastname}/>
                    <button type="submit">click me</button>
                </div>
            </form>
        </>
    );    
}
export default Form;