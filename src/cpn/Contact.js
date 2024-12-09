import React from'react';
import {useState} from "react";

export const Contact=()=>{

    const [showGratitude, setGratitude]=useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        setGratitude(true);
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
                    <input type="text" name="name"/>
                </label>
                <br />
                <label>
                    Your e-mail address:
                    <input type="text" name="name"/>
                </label>
                <br/>
                <label>
                    Message:
                    <input type="text" name="name"/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
            
    );
};

export default Contact;