import Button from './components/button';
import Input from './components/input';
function App() {
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
        <h3 style={{ fontSize: '40px' }}>Things to do</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '22px' }}>
          <Input placeholder={'Add new task'}></Input>
          <Button
            width={159}
            onclick={() => {
              alert('working');
            }}
            background={'#5559C3'}
          >
            Add New
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
