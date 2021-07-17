import React, { useState } from 'react';
import ItemList from './ItemList';

const App=()=> {

  const [inputList,setInputList]=useState('');
  const [Items,setItems]=useState([]);

  const inputEvent=(event)=>{
    setInputList(event.target.value);
  }
  const ListItems=(event)=>{
    setItems((oldItems)=>{
        return [...oldItems,inputList]
    })
    setItems('');
  }
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
          return index !==id;
      });
      
    });

  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input type="text" placeholder="Add an item" onChange={inputEvent} value={inputList} />
          <button onClick={ListItems} >+</button>
          <ul>
            {/* <li>{inputList} </li> */}
              {Items.map((itemval,index)=>{
                  return <ItemList 
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems} />;

              })}
            
          </ul>
        </div>
      </div>

    </>

 
  );
}

export default App;
