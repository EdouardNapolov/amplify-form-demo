import React from 'react';
import classes from './MainForm.module.css';

const MainForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <section className={classes.mainForm} >
            <h1>Enter user registration data</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default MainForm;