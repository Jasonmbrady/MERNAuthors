import React, { useState } from 'react';
import './App.css';
import { Router } from "@reach/router";
import DisplayAuthors from './views/DisplayAuthors';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {

  const [authors, setAuthors] = useState([{
    name: ""
  }]);

  const updateAuthor = (id, author) => {
    let idx = 0;
    for (let i = 0; i < authors.length; i++) {
      if (authors[i]._id === id) {
        idx = i;
      }
    }
    const authorsTemp = [...authors];
    authorsTemp[idx] = { name: author.name };
    setAuthors(authorsTemp);
  }

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <DisplayAuthors path="/" authors={authors} setAuthors={setAuthors} />
        <AddAuthor path="/authors/new" authors={authors} setAuthors={setAuthors} />
        <EditAuthor path="/update/:id" updateAuthor={updateAuthor} />
      </Router>
    </div>
  );
}

export default App;
