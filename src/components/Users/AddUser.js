import React from "react";
import classes from "./AddUser.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <div className={classes.card}>
                    <div className={classes.flex_container}>
                        <div className={classes.flex_item}>
                            <label htmlFor="username">User Name</label>
                            <input id="username" type="text" />
                        </div>
                        <div className={classes.flex_item}>
                            <label htmlFor="age">Age (Years)</label>
                            <input id="age" type="number" />
                        </div>
                        <div className={classes.flex_item}>
                            <Button type="submit">Add User</Button>
                            {/* <button className={classes.button}>Add User</button> */}
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default AddUser;
