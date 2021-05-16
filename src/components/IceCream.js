import React from 'react'
import AddIceCream from '../redux/actions/AddIceCream'
import {connect} from 'react-redux'

function IceCream(props) {
    return (
        <div>
            CALLING ICECREAM
            <h3>No of IceCream present:{props.numOfIceCream}</h3>
            <button onClick={props.addIceCream}>Add</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        numOfIceCream: state.ice.numOfIceCream
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addIceCream: ()=>dispatch(AddIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCream)
