import UserEdit from './components/UserEdit';
import UserShow from './components/UserShow';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <UserEdit />
      <UserShow />
    </div>
  );
}

export default App;
