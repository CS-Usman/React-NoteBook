import React from "react";


function Note(props) {
    return(
        <div className="note">
            <h3 className="title">{props.everyNote.heading}</h3>
            <p className="content">{props.everyNote.content}</p>
            <button onClick={()=>{
                props.delete(props.id);
            }}>DELETE</button>
        </div>
    );

}

export default Note;