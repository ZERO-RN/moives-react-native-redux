import { USSHOW_LIST } from '../../actions/types';

export const usShow = (state = {}, action) => {
	switch (action.type) {
		case USSHOW_LIST:
			return Object.assign(
				{} ,
				state ,
				{data : action.data}
				);
		default:
		return state;
	}
}