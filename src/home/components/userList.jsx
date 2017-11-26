import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ADDUser} from "../actions"
 class List extends React.Component{
    render(){
        
        return<div>
            {
                this.props.list.map((value,key)=>{
                    return(<li key={key}>{value.name}</li>)
                })
            }
            <button onClick={()=>{
                var obj=Object.assign([],this.props.list);
                obj.push({
    name:"vimal RAj",
    DOB:"27-01-2017",
    degree:"MCA"
})
                this.props.ADDUser(obj)
                }}>add</button>
                <a href="/home/2">click</a>
        </div>
    }
}

function bindState(state){
    return {
        list:state.bioDataList
    }
}
function addAction(dispatch){
    return bindActionCreators({ADDUser:ADDUser},dispatch)
}
export default connect(bindState,addAction)(List)
