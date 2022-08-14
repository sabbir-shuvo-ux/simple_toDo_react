import { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

function App() {

  const [textValue, setTextValue] = useState("");
  const [itemsGet, setItemsGet] = useState([]);

  const textHandel = (e) => {
    setTextValue(e.target.value);
  }

  const btnHandel = () => {
    
    if(textValue === ""){
      return;
    }

    setItemsGet((getAllValue) => {
      return [...getAllValue, textValue]
    })
    setTextValue("")
  }

  const removeHandelar = (id) => {

    setItemsGet((getAllValue) => {
      return getAllValue.filter((arryElems, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <main>
        <div className="conatiner">
          <img src="https://img.icons8.com/bubbles/100/000000/todo-list.png"/>
          <h1 className='title'>to do app</h1>

          <div className="input_grp">
            <input
              type="text" 
              value={textValue} 
              placeholder="Enter some text here.."
              onChange={textHandel}
            />
            <button 
              onClick={btnHandel}  
            > + </button>
          </div>
        
          <ul>

     

            {itemsGet.map((eItem, index) => {
              return <ToDoLists
              text={eItem}
              key={index}
              id={index}
              onSelect={removeHandelar}
              />
            })}
            
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
