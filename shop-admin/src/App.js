import { useEffect } from 'react';
import { Select } from 'zent';
import 'zent/css/index.css';
import './App.css';

const options = [
  {
    key: '1',
    text: 'Option 1',
  },
  {
    key: '2',
    text: 'Option 2',
  },
  {
    key: '3',
    text: 'Option 3',
  }
];
function App() {

  return (
    <div className="App">
      <Select clearable options={options} placeholder="选择一项" />
    </div>
  );
}

export default App;
