import { useState } from "react"


function App() {
  const [colors, setColors] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{
      backgroundColor: colors
    }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" >
          <button
            onClick={() => setColors("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setColors("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{ backgroundColor: "green" }}>Green</button>
          <button
            onClick={() => setColors("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setColors("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{ backgroundColor: "grey" }}>Grey</button>
          <button
            onClick={() => setColors("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{ backgroundColor: "pink" }}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
