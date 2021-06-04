const initialState = {
    employees: [],
    selected: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, employees: action.payload }
        case 'SELECT':
            const newSelected = [...state.selected, action.payload];
            return { ...state, selected: newSelected };
        case 'DESELECT':
            const newDeselected = state.selected.filter(id => id !== action.payload);
            return { ...state, selected: newDeselected }
        case 'SELECT_ALL':
            return { ...state, selected: action.payload }
        case 'DESELECT_ALL':
            return { ...state, selected: [] }
        default:
            return state;
    }

}