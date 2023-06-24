import React, {useState} from 'react'
import "./style.css";
import Item from "./Item";

const AddItems = () => {
    const [inputData, setInputData] = useState ("");
    const [listOfItems, setListOfItems] = useState ([]);
    const [flag, setFlag] = useState (0);
    const [enable, setEnable] = useState(0);

    var updated_list = [];

    const manipulateInput = (data) => {        
        setInputData (data);       
        setEnable(1);

        
    }

    const manipulateList = () => {
        if (enable){
            updated_list = [...listOfItems];
            updated_list.push (inputData);
            
            setListOfItems (updated_list);
            setInputData ("");
        }

        setEnable(0);
        setFlag(0);
        
        
    }

    const ChooseButton = () => {
        if (flag) return <span className = "edit-btn">edit</span>
        else return <span>+</span>
    }
    
    
  return (
    <>
       <div className = "input_div">

       <input 
            type = "text" 
            placeholder="Add item" 
            className='textbox' 
            value={inputData}
            onChange={e=>manipulateInput(e.target.value)}>
       </input>

       <button 
            className = "add_button" 
            onClick={()=> {manipulateList ()}}>
                {ChooseButton ()} 
       </button>
       </div>

        <Item 
            listOfItems = {listOfItems} 
            setListOfItems = {setListOfItems} 
            setInputData = {setInputData}
            flag = {flag}
            setFlag = {setFlag}
        />
    </>
  )
}

export default AddItems