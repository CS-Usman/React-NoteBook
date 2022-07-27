import React,{useState} from "react";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import InputNote from "./component/InputNote";
import './css/styles.css';
import './css/inputNote.css';
import './css/note.css';

function App(){
    const[notesArr,setNotesArr] = useState([]);
    let addNote = (note) =>{
        setNotesArr((prevValue) => {
            return[...prevValue,note];
        });
        
    };

    let deleteNote= (id) => {
        setNotesArr((notesArr)=>{
            return notesArr.filter((item,index)=>{
                return index !== id
            });
        });
    }

    return(
        <div>
            <Header />
            <div className="input">
                <InputNote Add={addNote} />
            </div>
            <div className="gridContainer">
                {notesArr.map((note,index) =>(
                    <Note 
                    everyNote={note}
                    key = {index}
                    id={index}
                    delete={deleteNote}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;