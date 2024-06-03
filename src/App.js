import { useEffect, useState } from 'react';
import List from './components/List';
import Button from './components/button';
import Input from './components/input';
import axios from 'axios';
import { useLocalstrorage } from './hooks/useLocalstrorage';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [type, setType] = useState('all');

  function addtodo() {
    if (newTodo == '') {
      setError('Please Enter some value');
      return;
    }
    const existing_todos = todos.filter((todo) => todo.title == newTodo);

    if (existing_todos.length > 0) {
      setError('This Task already exist.');
      return;
    }

    setError('');
    todos.push({
      title: newTodo,
      completed: false,
    });
    setTodos([...todos]);
    setNewTodo('');
  }
  function markAsComplete(index) {
    console.log('working');
    todos[index].completed = true;
    setTodos([...todos]);
  }
  function deleteTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }

  const pendind_task = todos.filter((todo) => todo.completed == false);
  const filtered_task = todos.filter((todo) => {
    if (type == 'all') {
      return true;
    } else if (type == 'pending' && todo.completed == false) {
      return true;
    } else if (type == 'completed' && todo.completed == true) {
      return true;
    }
  });

  async function getAlltodos() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const frist_ten = response.data.splice(0, 11);
      setTodos(frist_ten);
    } catch (err) {
      console.log('Error in get All todos API', err);
    }
  }
  useEffect(() => {
    getAlltodos();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '40px' }}> React Todo App</h1>
      <div
        style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          border: '2px solid #AE8B8B',
        }}
      >
        <h3 style={{ fontSize: '40px', margin: '10px' }}>Things to do</h3>
        <hr style={{ width: '70%' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '22px',
            width: '70%',
          }}
        >
          <Input
            placeholder={'Add new task'}
            value={newTodo}
            onChange={(value) => setNewTodo(value)}
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                addtodo();
              }

              // console.log(e.code)
            }}
          ></Input>
          <Button width={159} onclick={addtodo} background={'#5559C3'}>
            Add New
          </Button>
        </div>
        {error ? <p style={{ width: '68%', color: 'red' }}>{error}</p> : null}
        <div
          style={{
            display: 'flex',
            margin: '12px auto',
            width: '68%',
            flexDirection: 'column',
          }}
        >
          <List
            todos={filtered_task}
            markAsComplete={markAsComplete}
            deleteTodo={deleteTodo}
          />
        </div>
        <footer
          style={{
            backgroundColor: '#f1f1f1',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '8px 0px',
          }}
        >
          <p style={{ paddingLeft: '12px' }}>
            {pendind_task.length} items left
          </p>
          <div style={{ display: 'flex', paddingRight: '12px', gap: 16 }}>
            <p
              onClick={() => {
                setType('all');
              }}
              style={{ cursor: 'pointer' }}
            >
              All
            </p>
            <p
              onClick={() => {
                setType('pending');
              }}
              style={{ cursor: 'pointer' }}
            >
              Todo
            </p>
            <p
              onClick={() => {
                setType('completed');
              }}
              style={{ cursor: 'pointer' }}
            >
              Completed
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
