import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import AddCake from '../redux/actions/AddCake'

function HooksCake() {

    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            CALLING CAKE
            <h3>No of cakes present:{numOfCakes}</h3>
            <button onClick={()=>dispatch(AddCake())}>Add</button>
        </div>
    )
}

export default HooksCake
