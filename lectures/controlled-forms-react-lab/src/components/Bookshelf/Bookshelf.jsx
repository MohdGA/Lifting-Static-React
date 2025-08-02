import { useState } from "react";

const Bookshelf = () => {

    const [books,setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion', author: 'C.S. Lewis' },
    ]);

    const [newBook,setNewBook] = useState({
        title: "",
        author: ""
    });

    const handleInput = (event) => {
        setNewBook({...newBook, [event.target.name] : event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({title: "", author: ""});
    }

    return (
        <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" 
                    name="title" 
                    id="title"
                    value={newBook.title}
                    onChange={handleInput} />

                    <label htmlFor="author">Title</label>
                    <input type="text" 
                    name="author" 
                    id="author"
                    value={newBook.author}
                    onChange={handleInput} />
                    <br />
                    <button>Add a book</button>
                </form>
            </div>
            
            <div className="bookCardsDiv">
                {books.map((book , idx) => 
                    <div className="bookCard" key={idx}>
                        {book.title} - {book.author}
                    </div>
                )}
            </div>

        </div>
        </>
    )
}

export default Bookshelf;