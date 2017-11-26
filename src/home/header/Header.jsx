import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ADDUser} from "../actions"
import {Provider} from "react-redux";
import {createStore} from 'redux';
import allReducers from "../reducers";
const store =createStore(allReducers);
class Main extends Component{
    state={
        file:[]
    }
    componentWillMount(){
        console.log("hi")
    }
    fileUpdate(){
        console.log(this)
        this.setState({
            file:this.fileV
        })
    }
    sendFormData(){
        let formData= new FormData();
        let header=new Headers();
        var files=[];
        console.log(this.fileV.files.length)
        for(var i=0;i<this.fileV.files.length;i++){
            formData.append("file",this.fileV.files[i])
        }
        header.append("content-type","application/json")
 
        console.log(this.fileV.files)
        formData.append("vimal","ss")
        fetch("http://localhost:3333/file_upload",{
            method:'post',
            body:formData
        }).then(result=>result.json()).then(result=>{
            console.log(result)
        })
        fetch("http://localhost:3333/d",{
            method:'post',
            body:JSON.stringify({vi:2}),
            headers:header
        }).then(res=>res.json()).then(res=>{console.log(res)})
    }
    render(){
        return (
            <div>
                <input type="file" multiple ref={(input)=>{
                    this.fileV=input;
                }} onChange={()=>{
                    this.fileUpdate()
                }}
                />
                <button onClick={()=>{
                    this.sendFormData()}}></button>

                    <div>
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
        </div>
            </div>
                        )
    }
    componentDidMount(){
        console.log(this.fileV.files)
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
const M= connect(bindState,addAction)(Main)

class Header extends React.Component{
    render(){
        console.log(this.props.match.params)
        return (
    <Provider store={store}>
        <M/>
    </Provider>);
    }
}
export default Header;