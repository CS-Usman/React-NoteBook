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
        <form>
                <input className="inputBox" name="heading"type = "text" value = {note.heading} onChange = {handleChange} placeholder="Title"/>
                <textarea className="inputBox" name="content" value = {note.content} onChange={handleChange} placeholder="Take a note..."></textarea>
                <button onClick={(event)=>{
                    event.preventDefault();
                    props.Add(note);
                }}>Add</button>
        </form>
    );
}

export default InputNote;