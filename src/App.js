import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: userName, age: userAge }];
        });
    };

    return (
        <div>
            <AddUser onAddUserData={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
};

export default App;
