import React from 'react';
import { navigate } from "@reach/router";

const AuthorForm = ({ submitHandler, name, setName }) => {

    return (
        <div style={{ border: "solid black 1px", margin: "auto", width: "300px" }}>
            <form onSubmit={submitHandler} >
                <label>Name:</label>
                <input
                    type="text"
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    value={name}
                    style={{ display: "block", margin: "auto" }}
                />
                <button
                    type="button"
                    onClick={e => navigate("/")}>
                    Cancel
                </button>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
export default AuthorForm;