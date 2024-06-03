import Button from './button';
import { FaRegTrashAlt } from 'react-icons/fa';

function List(props) {
  const { todos, markAsComplete, deleteTodo } = props;
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{todo.title}</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <p style={{ margin: '2px' }}>
                {todo.completed == false ? (
                  <Button
                    background={'rgb(190 190 190)'}
                    onclick={() => {
                      markAsComplete(index);
                    }}
                  >
                    Pending
                  </Button>
                ) : (
                  <span>Completed</span>
                )}
              </p>
              <FaRegTrashAlt
                onClick={() => {
                  deleteTodo(index);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
