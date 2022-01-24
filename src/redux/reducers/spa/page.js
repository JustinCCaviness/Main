const initialState = 0

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return ++state
        case 'PREVIOUS_PAGE':
            return (state > 0) * --state 
        default:
            return state
    }
}