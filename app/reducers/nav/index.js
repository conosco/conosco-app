import createReducer from '../../helpers/createReducer';
import { modalComponentsIds } from '../../containers/nav/AppModals';

const createInitialState = () => {
	const state = {};
	modalComponentsIds.forEach((id) => {
		state[id] = {
			visible: false,
			params: {}
		};
	});
	return state;
};

const initialState = createInitialState();

const modalsReducer = createReducer(initialState, {

	OPEN_MODAL: (state, action) => {
		const nextState = { ...state };
		nextState[action.modalId] = {
			visible: true,
			params: action.params ? action.params : {}
		};
		return nextState;
	},

	CLOSE_MODAL: (state, action) => {
		const nextState = { ...state };
		nextState[action.modalId] = {
			visible: false
		};
		return nextState;
	}

});

export default modalsReducer;
