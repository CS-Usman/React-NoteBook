import React,{useState} from "react";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import InputNote from "./component/InputNote";

function App(){
    const[notesArr,setNotesArr] = useState([]);
    let addnote = (note) =>{
        setNotesArr((prevValue) => {
            return[...prevValue,note];
        });
        
    };

    return(
        <div>
            <Header />
            <div>
                <InputNote Add={addnote} />
            </div>
            <div>
                {notesArr.map((note) =>(
                    <Note everyNote={note}/>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;