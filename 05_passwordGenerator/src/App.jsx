import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charsAllowed) str += "@#$%^&*(){}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charsAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => passwordGenerator(), [length, numberAllowed, charsAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white hover:bg-blue-900 px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={20} className='cursor-pointer' value={length}
              onChange={(e) => { setLength(e.target.value) }}
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={(e) => { setNumberAllowed((prev) => !prev) }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charsAllowed} id='numberInput' onChange={(e) => { setCharsAllowed((prev) => !prev) }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
