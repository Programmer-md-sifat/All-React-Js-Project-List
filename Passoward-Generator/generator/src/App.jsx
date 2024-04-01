import { useState, useCallback, useEffect, useRef } from 'react';
import './index.css';

function App() {

  const [length, setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {

    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!'()*+,-./:;<=>?@[]^_`{|}"

    for (let i = 1; i < length; i++) {
      
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
      
    }
     setPassword(password)

  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

  })


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])






  return (
    <>
      
      <div className='py-5 my-20 ml-36 mr-36 rounded-2xl bg-slate-600'>
        <h1 className='text-white text-center text-2xl'>Password Generator</h1>

        <br />

        <div className='text-center'>
          
          <input type="text"
            value={password}
            className='py-3 px-20 outline-none rounded-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            
            
          
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-3 rounded-lg ml-2'>copy</button>

        </div>

        <br />

        <div>
          <div className='ml-40'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />

          
            <label className='text-white ml-2'>Length: {length}</label>

            <input
              className='ml-3'
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className='ml-1 text-white'>Numbers</label>

            <input
              className='ml-3'
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}

            />

            <label className='ml-1 text-white'>Characters</label>


          </div>
          
        </div>
        <br />




      </div>
    
    </>
  );
}

export default App;
