import React, { useState } from 'react';
import { Button } from 'keep-react';

function App() {
  const [val, setVal] = useState(0);

  return (
    <>
      <div className='text-center mt-44 h-80 w-96 ml-80 rounded-lg'>
        <h1 className='text-5xl'>{val}</h1>

        <div className='flex justify-center mt-12 gap-3'>
          <Button className='p-7 w-32' onClick={() => setVal(val + 1)} color="success">Add me</Button>
          <Button onClick={() => setVal(val - 1)} color="error">Remove me</Button>
        </div>
      </div>
    </>
  );
}

export default App;