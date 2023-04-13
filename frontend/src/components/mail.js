import React, { useState } from 'react';

const Mail = () => {
    const [formState, setFormState] = useState({ name: '', email: '' });

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
