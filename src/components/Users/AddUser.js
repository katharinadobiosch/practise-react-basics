import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const AddUser = (props) => {
    // INPUT FIELD USERNAME
    const [enteredUsername, setEnteredUsername] = useState("");
    // INPUT FIELD AGE
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid age (> 0).",
            });
            return;
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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    onConfirm={errorHandler}
                    title={error.title}
                    message={error.message}
                />
            )}
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
        </>
    );
};

export default AddUser;
