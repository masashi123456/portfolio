import React from'react';
import {useState} from "react";

export const Contact=()=>{

    const [showGratitude, setGratitude]=useState(false);
    const[error, setError] = useState({
        name: '',
    });

    const handleSubmit=(event)=>{
        event.preventDefault();

        let valid=true;
        const newError={name:''};

        if(!event.target.name.value){
            newError.name='Name is required';
            valid=false;
        }
        setError(newError);
        if(valid){

            setGratitude(true);
        }
        
    }
    
    return(

        <div className="contact-me">
            <h1>Please Contact me!!</h1>
            {showGratitude ?(
                <p>Thank you for reaching me out!</p>
            ):(
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <input type="text" name="name" required/>
                </label>
                <br />
                <label>
                    Your e-mail address:
                    <input type="text" name="address" required/>
                </label>
                <br/>
                <label>
                    Message:
                    <input type="text" name="message" required/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
            
    );
};

export default Contact;