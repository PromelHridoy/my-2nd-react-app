import { useState } from "react"

export default function Batsman() {
    const [run, setRun] = useState(0);
    const [sixs, setSixs] = useState(0);
    const handleRun = (v) => {
        setRun (run + v);
        if(v === 6){
            setSixs(sixs + 1)
        }
    }

     const counterStyle ={
        border: '2px solid yellow',
        padding: "20px"
    }
    return (
        <div style={counterStyle}>
            <h3>Batsman Name: Hridoy</h3>
            <h3>Total Run: {run}</h3>
            <p><small>Sixs: {sixs}</small></p>
            <button onClick={() => handleRun(1)}>1</button>
            <button onClick={() => handleRun(2)}>2</button>
            <button onClick={() => handleRun(3)}>3</button>
            <button onClick={() => handleRun(4)}>4</button>
            <button onClick={() => handleRun(6)}>6</button>
            <button onClick={() => handleRun(0)}>0</button>
        </div>
    )
}