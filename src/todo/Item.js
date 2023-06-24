import React from 'react'


const Item = ({listOfItems, setListOfItems, setInputData, flag, setFlag}) => {
    const EditClick = (data)=>{
        
        if (flag === 0){
            setFlag (!flag);
            setInputData (data);
            DelClick (data);
        }
        
        
    }
    const DelClick = (data)=>{
        setListOfItems (listOfItems.filter (ele => data != ele))
    }
    console.log ("in");
  return (    
    <div className = "item_list">
        {listOfItems.map((ele) => {
            return(
                <>
                    <p className = "item">
                        {ele}
                        <button className = "edit" onClick = {()=>EditClick(ele)}>edit</button>
                        <button className='del' onClick = {()=>{DelClick (ele)}}>del</button>
                    </p>
                    
                </>
            )
        })}
    </div>
  )
}

export default Item