import React,{useState} from 'react';

const Form = () =>{

    const [fullName,setfullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });

    const inputEvent = (event) => {
        
        const { value, name }=event.target;

        setFullName((preValue) => {
            if(name === 'fName'){
                return{
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:preValue.phone,
                };
            }else if(name === 'lName'){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                    phone:preValue.phone,
                };
            }else if(name === 'email'){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    phone:preValue.phone,
                };
            }else if(name === 'phone'){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:value,
                };
            }
        });
    };

    const onSubmits = (event) =>{
        event.preventDefault();
        alert('form submitted');

    }

    return(
        <>
            <form onClick={onSubmits}>
                <div>
                    <h1>Hello,{fullName.fname} {fullName.lname}</h1>
                    <h2>{fullName.email}</h2>
                    <h3>{fullName.phone}</h3>
                    <input name="fName" type="text" placeholder="enter your first name" onChange={inputEvent} value={fullname.fname} autocomplete="off" />
                    <br/>
                    <input name="lName" type="text" placeholder="enter your last name" onChange={inputEvent} value={fullname.lname} autocomplete="off" />
                    <br/>
                    <input name="email" type="text" placeholder="enter your email id" onChange={inputEvent} value={fullname.email} autocomplete="off" />
                    <br/>
                    <input name="phone" type="text" placeholder="enter your number" onChange={inputEvent} value={fullname.phone} autocomplete="off" />
                    <br/>
                    <button type="submit">click me</button>
                </div>
            </form>
        </>
    );    
}
export default Form;
