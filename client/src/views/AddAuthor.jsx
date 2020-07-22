import React, { useState } from 'react';
import { Link, navigate } from "@reach/router";
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const AddAuthor = ({ authors, setAuthors }) => {

    const [name, setName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        let newAuthor = { name: name };
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then(res => setAuthors([...authors, res.data]))
            .catch(err => console.log(err));
        navigate("/");
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Add a new Author:</p>
            <AuthorForm
                submitHandler={submitHandler}
                name={name}
                setName={setName}
            />
        </div>
    )
}
export default AddAuthor;