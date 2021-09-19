import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <form>
            <div className="card">
                <div className="flex-container">
                    <div className="flex-item">
                        <label>User Name</label>
                        <input />
                    </div>
                    <div className="flex-item">
                        <label>Age (Years)</label>
                        <input />
                    </div>
                    <div className="flex-item">
                        <button>Add User</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Card;
