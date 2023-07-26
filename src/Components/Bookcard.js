import React from 'react';

const Bookcard = ({ bookData }) => {
    return (
        <div style={{
            justifyContent: 'flex-start',
            display: 'flex',
            flexWrap: 'wrap',
            padding: 10,
            border: 100,
            backgroundImage: 'url("../images/pink.jpg")',
            backgroundSize: 'cover'
        }}>
            {bookData.map(curElem => (
                <div className="card" style={{ width: 400, height: "auto", margin: 35 }}>
                    <img src={curElem.image} className="card-img-top" style={{ height: 500 }} />
                    <div className="card-body">
                        <div className="Book-name" style={{ textAlign: "center", font: "Open Sans", fontSize: 30, padding: 20, fontWeight: 500, textShadow: "0 0 2px #800020", textDecorationLine: "underline" }}>
                            {curElem.name}
                        </div>
                        <div className="Author-name" style={{ fontSize: 15, fontWeight: 500 }}>
                            <span style={{ textDecorationLine: "underline", fontWeight: 700, color: "#444444" }}>Author:</span> {curElem.Author}
                        </div>
                        <p className="card-text" style={{ fontSize: 15, fontWeight: 500, color: "#787276" }}>
                            <span style={{ textDecorationLine: "underline", fontWeight: 700, color: "#444444" }}>Review:</span> {curElem.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bookcard;









































// const Bookcard = ({ bookData }) => {
//     return (
//         <div style={{
//             justifyContent: 'flex-start', display: 'flex', flexWrap: 'wrap', padding: 10, margin: 10, border: 100,
//             backgroundImage: "../images/cz.jpg", backgroundSize: 'auto'
//         }}>
//             {bookData.map(curElem => (

//                 <div className="card" style={{ width: 400, height: "auto", margin: 35 }}>
//                     <img src={curElem.image} className="card-img-top" style={{ height: 500 }} />
//                     <div className="card-body">
//                         <div className="Book-name" style={{ textAlign: "center", font: "Open Sans", fontSize: 30, padding: 20, fontWeight: 500, textShadow: "0 0 2px #800020", textDecorationLine: "underline" }}> {curElem.name}</div>
//                         <div className="Author-name" style={{ fontSize: 15, fontWeight: 500 }} >
//                             <span style={{ textDecorationLine: "underline", fontWeight: 700, color: "#444444" }}>Author:</span> {curElem.Author}
//                         </div>
//                         <p className="card-text" style={{ fontSize: 15, fontWeight: 500, color: "#787276" }}>
//                             <span style={{ textDecorationLine: "underline", fontWeight: 700, color: "#444444" }}>Review:</span> {curElem.description}</p>

//                     </div>
//                 </div>

//             ))}
//         </div>
//     );
// }

// export default Bookcard;



{/* <span style={{ textDecorationLine: "underline" }}>Review:</span> {curElem.description} */ }




// import React from 'react';









// import React from 'react';

// const Bookcard = ({ bookData }) => {
//     return (
//         <div
//             className="card-container"
//             style={{
//                 justifyContent: 'flex-start',
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 padding: 10,
//                 margin: 10,
//                 border: 100,
//                 backgroundImage: "../images/cz.jpg",
//                 backgroundSize: 'auto',
//                 backgroundPosition: 'center',
//             }}
//         >
//             {bookData.map(curElem => (
//                 <div className="card" style={{ width: 400, height: 'auto', margin: 35 }}>
//                     <img src={curElem.image} className="card-img-top" style={{ height: 500 }} />
//                     <div className="card-body">
//                         <div className="Book-name" style={{ textAlign: "center", font: "Open Sans", fontSize: 23, padding: 20 }}> {curElem.name}</div>
//                         <div className="Author-name" style={{ fontSize: 15 }} > Author :- {curElem.Author}</div>
//                         <p className="card-text"> Review :- {curElem.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Bookcard;
























