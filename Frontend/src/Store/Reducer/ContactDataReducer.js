export const initialState = {
    data: {},
    loading: true
}

export function ConatctDataReducer(state = initialState, action) {
    switch (action.type) {
        case "CONTACT_DATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}