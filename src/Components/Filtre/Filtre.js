import React, { useContext } from 'react'
import './Filtre.css'
import { MainContext } from '../../Context/Context'

function Filtre() {
    const { value, setValue } = useContext(MainContext)
    console.log(value)
    return (
        <div className='filtre-container'>
            <input
                className='filtre-input'
                type='text'
                placeholder='Search'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>
        </div>
    )
}

export default Filtre