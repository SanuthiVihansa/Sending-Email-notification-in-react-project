import React, { useState } from 'react';

const Mail = () => {
    const [formState, setFormState] = useState({ name: '', email: '' });

  
    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const submitHandler =(e) =>{
        e.preventDefault();
        const config ={
            SecureToken : "4e036695-ad15-4eed-ab80-3350dbcf2267 ",
            To : "sanumail@yopmail.com",
            From : formState.email,
            Subject : "Email generation using react",
            Body : `${formState.name} connected via email`
        }
        if(window.Email){
            window.Email.send(config).then(()=>{
                alert("Email sent successfully");
            });
        }
    }

    return (
        <div>
            <h1>Sample Email</h1>
            <form onSubmit={submitHandler}>
                Name :{' '}
                <input
                    type="text"
                    name="name"
                    value={formState.name || ''}
                    onChange={changeHandler}
                />
                <br />
                Email :
                <input
                    type="email"
                    name="email"
                    value={formState.email || ''}
                    onChange={changeHandler}
                />
                <input type="Submit" value="Send Email" />
            </form>
        </div>
    );
};

export default Mail;
