import React from "react";
import "./AddUser.css";
import Card from "../../UI/Card";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };
    return (
        // <Card>
        <form onSubmit={addUserHandler}>
            <div className="card">
                <div className="flex-container">
                    <div className="flex-item">
                        <label htmlFor="username">User Name</label>
                        <input id="username" type="text" />
                    </div>
                    <div className="flex-item">
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" type="number" />
                    </div>
                    <div className="flex-item">
                        <button>Add User</button>
                    </div>
                </div>
            </div>
        </form>
        // </Card>
    );
};

export default AddUser;
