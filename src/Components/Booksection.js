import React, { useState } from 'react';
import List from './Bookapi';
import Bookcard from './Bookcard';

const Booksection = () => {
    const [bookData, setbookData] = useState(List);
    const filterItem = (category) => {
        const updatedList = List.filter((curElem) => {
            return curElem.category === category;
        });

        setbookData(updatedList);
    };
    return (
        <>

            <nav className="navbar" style={{ justifyContent: "center", border: 100, backgroundImage: 'url("../images/pink.jpg")', backgroundSize: 'cover' }}>

                <button className="btn-group--item" class="btn btn-secondary" style={{ margin: 30 }} onClick={() => filterItem("Fantasy")}>All</button>
                <button className="btn-group--item" class="btn btn-secondary" style={{ margin: 30 }} onClick={() => filterItem("Fantasy")}>Genre</button>
                <button className="btn-group--item" class="btn btn-secondary" style={{ margin: 30 }} onClick={() => filterItem("Thriller")}>Author</button>
                <button className="btn-group--item" class="btn btn-secondary" style={{ margin: 30 }} onClick={() => filterItem("Self-help")}>Most Viewed</button>


            </nav>
            <Bookcard bookData={bookData} />

        </>
    )
}

export default Booksection