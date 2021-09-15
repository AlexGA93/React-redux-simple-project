// initial reducer state
const initialState = [
    {
        id: 0,
        name: 'Alejandro Mathews',
        email: 'alexmail@mail.com',
        age: 28
    },
    {
        id: 1,
        name: 'Tiana Doe',
        email: 'TDoe@mail.com',
        age: 31
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        // In case our action is add type, we must update our state with the action payload and return this updated state

        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;

        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);

            state = updateState;
            return state;
        default:
            return state;
    }
}

export default contactReducer;