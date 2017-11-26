import React, { Component } from 'react';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import allReducers from "./reducers"
import List from "./components/userList"

// const logger=createLogger();
const store =createStore(allReducers);

class Home extends Component{
    render(){
        return (
            <Provider store={store}>
                <List />
            </Provider>
        )
    }
}

export default Home;