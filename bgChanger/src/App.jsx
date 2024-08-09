import { useState } from 'react';

function App() {
  const [color, setColor] = useState('gray');

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 bg-white py-2 mr-40 ml-40 rounded-2xl gap-3">
        <button
          onClick={() => setColor('green')}
          className="text-white rounded-lg p-2"
          style={{ backgroundColor: 'green' }}
        >
          Green
        </button>

        <button
          onClick={() => setColor('red')}
          className="text-white rounded-lg p-2"
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>

        <button
          onClick={() => setColor('purple')}
          className="text-white rounded-lg p-2"
          style={{ backgroundColor: 'purple' }}
        >
          Purple
        </button>

        <button
          onClick={() => setColor('black')}
          className="text-white rounded-lg p-2"
          style={{ backgroundColor: 'black' }}
        >
          Black
        </button>

        <button
          onClick={() => setColor('blue')}
          className="text-white rounded-lg p-2"
          style={{ backgroundColor: 'blue' }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;