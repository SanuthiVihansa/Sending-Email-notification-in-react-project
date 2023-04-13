import React, { useState } from 'react';

const Mail = () => {
    const [formState, setFormState] = useState({ name: '', email: '' });

    const config ={
        Host : "smtp.elasticemail.com",
        Username : "sanumail@yopmail.com",
        Password : "8F083563841154A221EBC1B85D41139D6ED4",
        Port:2525,
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
