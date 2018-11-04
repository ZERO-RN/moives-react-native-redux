/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-17 10:38:00
 * @modify date 2017-05-17 10:38:00
 * @desc [description]
*/

import { nav } from './navigators/index';
import { usShow } from './usshow/reducers';
import { soonShow } from './soonshow/reducers';
import { cinemas } from './cinemas/reducers';
import { HotShowList,Banner,fetchLoading,navigation } from './hotshow/reducers';
import { combineReducers } from 'redux';


export default  allReducers = combineReducers({
	hotshows:HotShowList,
	banner:Banner,
	fetchload:fetchLoading,
	nav:nav,
    navigation:navigation,
	usshow:usShow,
	soonShow:soonShow,
	cinemas:cinemas
});