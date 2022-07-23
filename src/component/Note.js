import React from "react";


function Note(props) {
    return(
        <div>
            <h1>{props.everyNote.heading}</h1>
            <p>{props.everyNote.content}</p>
        </div>
    );

}

export default Note;