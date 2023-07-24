export const initialState = {
    data: {},
    loading: true
}

export function LogOutReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGOUT_DATA":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}