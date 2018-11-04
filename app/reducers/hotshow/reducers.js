/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:34
 * @modify date 2017-05-12 04:56:34
 * @desc [description]
*/
import { HOTSHOW_BANNER, HOTSHOW_LIST, HOTSHOW_FETCH, NAVIGATION } from '../../actions/types';

export const HotShowList = (state = {}, action) => {
	switch (action.type) {
		case HOTSHOW_LIST:
			return Object.assign(
			{} , state ,
				{	data : action.data}
			);
		default:
		return state;
	}
}

export const Banner = (state = {}, action) => {
	switch (action.type) {
		case HOTSHOW_BANNER:
			let subjects = action.data1;
			let data = subjects.slice(0, 5);
			return Object.assign(
			{} , state , {
				data1 : data
			}); 
		default:
		return state;
	}
}

export const fetchLoading = (state = {}, action) => {
	switch (action.type) {
		case HOTSHOW_FETCH:
			return Object.assign(
			{} , state , {
				data : action.bool
			});
		default:
		return state;
	}
}

export const navigation = (state = {}, action) => {
	switch (action.type) {
		case NAVIGATION:
			return Object.assign(
			{} , state ,
				{
				data : action.data
			}
			);
		default:
		return state;
	}
}