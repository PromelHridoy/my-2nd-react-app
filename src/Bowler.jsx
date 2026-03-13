import { useState } from "react"

export default function Bowler() {

    const [ball, setBall]= useState(0)
    const [over, setOver] = useState(0)
    const handleBall = () =>{
        const updatedOver = ball + 1;
        if(updatedOver === 6){
            setOver(over + 1)
            setBall(0)
        }else{
             setBall(updatedOver);
        }
    }
    const [wide, setWide]= useState(0)
    const handleWide  =() => {
        setWide(wide + 1)
    }
    const [noBall, setNoBall]= useState(0)
    const handleNoBall  =() => {
        setNoBall(noBall + 1)
    }


    return (
        <div>
            <p>Bowler Name: Promel</p>
            <h2>Over:{over}.{ball}</h2>
            <p><small>Wide: {wide} and NoBall: {noBall}</small></p>
            <button onClick={handleBall}>ball</button>
            <button onClick={handleWide}>wide ball</button>
            <button onClick={handleNoBall}>no ball</button>
        </div>
    )
}