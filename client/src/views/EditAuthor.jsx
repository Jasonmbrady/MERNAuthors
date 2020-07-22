import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, navigate } from "@reach/router";
import AuthorForm from '../components/AuthorForm';


const EditAuthor = ({ id, updateAuthor }) => {


    const [author, setAuthor] = useState({});
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data);
                setName(res.data.name);
            })
            .catch(err => console.log(err));

    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        let changedAuthor = {
            name: name
        }
        axios.put(`http://localhost:8000/api/authors/${id}`, changedAuthor)
            .then(author => updateAuthor(id, author))
            .catch(err => console.log(err));
        navigate("/");
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Update an Author:</p>
            <AuthorForm
                submitHandler={submitHandler}
                name={name}
                setName={setName}
            />
        </div>
    )
}
export default EditAuthor;