import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ""
    });

    const defaultValue = {
      title: "",
      author: ""
    }

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setBooks([...books, newBook]);
      setNewBook(defaultValue);
    }

    return (
      <div className="bookshelfDiv">
        <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            id="title" 
            name="title" 
            value={newBook.title}
            onChange={handleInputChange}/>

            <label htmlFor="author">author:</label>
            <input 
            type="text" 
            id="author" 
            name="author" 
            value={newBook.author}
            onChange={handleInputChange}/>

            <button type="submit">Add</button>
        </form>
      </div>
        <div className="bookCardsDiv">
         
          {books.map((book, idx) => 
              <div key={idx}>
                <strong>Title:</strong>{book.title}
                <p><strong>Author:</strong>{book.author}</p>
              </div>
          )}
         
        </div>
      </div>
    )
}

export default Bookshelf;