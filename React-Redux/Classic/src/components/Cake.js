import React from 'react'
import AddCake from '../redux/actions/AddCake'
import {connect } from 'react-redux'

function Cake(props) {
    return (
        <div>
            <h2>CALLING CAKE</h2>
            <h3>No of cakes present:{props.numOfCakes}</h3>
            <button onClick={props.addCakes}>Add</button>
            <br/><br/><br/>
            ************************************************************************************
            <h2>No of IceCream Present:{props.numOfIce}</h2>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        numOfCakes: state.cake.numOfCakes,
        numOfIce : state.ice.numOfIceCream
    }
}
const mapDispatchToProps =  (dispatch)=>{
    return{
        addCakes: ()=> dispatch(AddCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake)
