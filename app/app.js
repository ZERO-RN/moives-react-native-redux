/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:38:09
 * @modify date 2017-05-17 10:38:09
 * @desc [description]
*/
import { createStore, applyMiddleware, compose  } from 'redux';
import { View, Text,TextPropertiesAndroid }  from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import React, { Component } from 'react';
//import Root from './containers/root';
import allReducers from './reducers/allReducers';
import { fetchLoading } from './actions/hotshow-action';
import AppNavigations  from './navigators/AppNavigations';
import Loading from './compoments/comm/loading'


// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(allReducers);
const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);
// const  store = createStore(
// 	allReducers,
// 	applyMiddleware(thunk));
//初始化 进入等待 首屏数据 ajax请求
store.dispatch(fetchLoading(false));
//  store.dispatch(HOTSHOW_FETCH,false);



class App extends Component {

	constructor(props) {
        super(props);
		this.state = {
			fetchLoading: true
		}
    }
	componentDidMount() {
		let _that = this;
		let time = setTimeout(function() {
            _that.setState({
                fetchLoading: false
            });
			clearTimeout(time)
		}, 3000)
	}


	render() {
					{/*<Loading/>*/}
				// this.state.fetchLoading ?
					{/*<Text style={{marginTop:100,color:'blue',fontSize:30}}>*/}
						// waiting
					// </Text>
					// 	:
		return (
				<Provider store={ store }>
					<AppNavigations />
				</Provider>
		);
	}
}

module.exports = App;