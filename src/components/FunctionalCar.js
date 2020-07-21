import React, {useEffect, useState} from 'react'

export default function FunctionalCar() {
    const [color, setColor] = useState("yellow")

    useEffect(() => {
        setTimeout(()=>{
            setColor("red")
        },1000)
        return function () {
            alert(color + " car is dispatching")
        }
    })
    return (
        <div>
            <h1 style={{color: color}}>This is {color} car</h1>
        </div>
    )
}
