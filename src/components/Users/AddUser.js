import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const AddUser = (props) => {
    // INPUT FIELD USERNAME
    const [enteredUsername, setEnteredUsername] = useState("");
    // INPUT FIELD AGE
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            console.log("empty input");
        }
        if (+enteredAge < 1) {
            console.log("your age is invalid");
        }
        // console.log("button was clicked");
        // console.log(enteredUsername, enteredAge);
        // const userData = {
        //     username: enteredUsername,
        //     age: enteredAge,
        // };

        props.onAddUserData(enteredUsername, enteredAge);

        // // TO CLEAR INPUT FIELDS AFTER USER SUBMITTED DATA

        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        // console.log(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        // console.log(event.target.value);
    };

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <div className={classes.card}>
                    <div className={classes.flex_container}>
                        <div className={classes.flex_item}>
                            <label htmlFor="username">User Name</label>
                            <input
                                id="username"
                                type="text"
                                onChange={usernameChangeHandler}
                                value={enteredUsername}
                            />
                        </div>
                        <div className={classes.flex_item}>
                            <label htmlFor="age">Age (Years)</label>
                            <input
                                id="age"
                                type="number"
                                onChange={ageChangeHandler}
                                value={enteredAge}
                            />
                        </div>
                        <div className={classes.flex_item}>
                            <Button type="submit">Add User</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default AddUser;
