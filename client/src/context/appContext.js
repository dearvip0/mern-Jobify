import { useReducer, useContext, createContext } from 'react';
import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';

import reducer from './reducer';

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
	};

	const clearAlert = () => {
		setTimeout(dispatch({ type: CLEAR_ALERT }), 3000);
	};
	return (
		<AppContext.Provider value={{ ...state, displayAlert }}>
			{children}
		</AppContext.Provider>
	);
};

// make sure use
const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };