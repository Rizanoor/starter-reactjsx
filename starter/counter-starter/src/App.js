import {useState} from 'react';
import './App.css';  
import shoppingIcon from './assets/shopping-icon.svg';
import plusicon from './assets/plus-icon.svg';
import minusicon from './assets/minus-icon.svg';

function App() {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Onigiri', count: 1},
    {title: 'Golda Coffee', count: 1},
  ]);

  const handleAdditionCount = (index) => { 
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1
    
    setTodos(newTodos)
  }

  return (
    <>
      <nav className='nav'>
        <img className='nav-icon' src={shoppingIcon} alt='shopping icon'/>
        <h1 className='nav-title'>Shopping List</h1>
      </nav>

      <section className='container' >
        <form className='form'>
          <input 
            onChange={(e) => {setValue(e.target.value)}}
            value={value}
            className='input'
            type='text'
            placeholder='List Shopping' />
          <button className='add-button' type='submit'>
            add
          </button>
        </form>

        {todos.length > 0 ? (
            <div className='todos'>
              {todos.map((todo, index, arr) =>{

                return(
                  <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>

                    {todo.title}

                    <div className='todo-icon-wrapper'>
                        <div className='todo-count'>
                          {todo.count}
                        </div>

                        <button className='todo-action-button'>
                          <img src={minusicon} alt='minus icon'></img>
                        </button>

                        <button onClick={() => handleAdditionCount(index)} className='todo-action-button'>
                          <img src={plusicon} alt='plus icon'></img>
                        </button>
                    </div>
                  </div>
                )
              } )}
            </div>
          ) : (
            <div>
              Kosong
            </div>
          )
        }
      </section>
    </>
  );
}

export default App;
