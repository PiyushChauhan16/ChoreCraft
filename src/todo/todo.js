import React from 'react'
import "./style.css";
import AddItems from "./AddItems";


const Todo = () => {
  return (
    <>
        <p style={{color:"white", fontFamily:"Arial"
        }}>Add Your List Here</p>

        <AddItems />
        
    </>
    
  );
}

export default Todo;