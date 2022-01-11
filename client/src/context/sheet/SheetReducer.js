const SheetReducer = (action, state) => {
	switch (action.type) {
		case 'value':
			return {
				...state,
			};

		default:
			break;
	}
};

export default SheetReducer;
