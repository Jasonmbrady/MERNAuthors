import React, { useEffect } from 'react';
import { Link, navigate } from "@reach/router";
import axios from "axios";

const DisplayAuthors = ({ authors, setAuthors }) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, [setAuthors])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== id));
            })
            .catch(err => console.log(err));
    }

    const editHandler = (id) => {
        navigate(`/update/${id}`);
    }

    return (
        <div>
            <Link to="/authors/new">Add an Author</Link>
            <p>We have quotes by:</p>
            <table style={{ margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button onClick={e => editHandler(author._id)}>Edit</button>
                                        <button onClick={e => deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DisplayAuthors;