import React, { useState } from 'react';

const Mail = () => {
    const [formState, setFormState] = useState({ name: '', email: '' });

    const config ={
        SecureToken : "a48f0e32-e90a-4a63-a155-ced14f04ca61",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }
    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <h1>Sample Email</h1>
            <form>
                Name :{' '}
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={changeHandler}
                />
                <br />
                Email :
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={changeHandler}
                />
                <input type="Submit" value="Send Email" />
            </form>
        </div>
    );
};

export default Mail;
