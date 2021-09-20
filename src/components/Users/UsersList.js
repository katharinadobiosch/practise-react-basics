import React from "react";
import classes from "./UsersList.module.css";

import Card from "../../UI/Card";

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <div className={classes.card}>
                <ul>
                    {props.users.map((user) => (
                        <li>
                            {user.name} is {user.age} years old
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default UsersList;
