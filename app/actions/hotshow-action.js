/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-12 04:56:43
 * @modify date 2017-05-12 04:56:43
 * @desc [description]
*/
import { HOTSHOW_BANNER, HOTSHOW_LIST, HOTSHOW_FETCH, ADDMORE, USSHOW_LIST, NAVIGATION } from './types';
import { initFetch } from '../middleware/index-api';
import { hotshow, sonshow, usshow, nearcinemas } from '../middleware/apis';

//添加轮播
export const addBanner = (data1) => {
	return {
		type: HOTSHOW_BANNER,
		data1
	}
}
//加载等待，true 显示 反之
export const fetchLoading = (bool) => {
	return {
		type: HOTSHOW_FETCH,
		bool
	}
}
//添加list
export const addList = (data) => {
	return {
		type: HOTSHOW_LIST,
		data
	}
}

// 正在热映 初始请求
export const initHotshow = () => {
	return initFetch(addList)(hotshow);
}

//导航 action onpress
export const navigation = (data) => {
	return {
		type: NAVIGATION,
		data
	}
}