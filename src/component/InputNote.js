import React, { useState } from "react";

function InputNote(props){
    const[note,setNote] = useState({
        heading:"",
        content:""
    });

    let handleChange = (event) => {
        const {value,name} = event.target;
        setNote((prevValue) => {
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    return(
        <div>
            <input name="heading"type = "text" value = {note.heading} onChange = {handleChange} placeholder="Title"/>
            <textarea name="content" value = {note.content} onChange={handleChange} placeholder="Take a note..."></textarea>
            <button onClick={()=>{
                props.Add(note);
            }}>Add</button>
        </div>
    );
}

export default InputNote;