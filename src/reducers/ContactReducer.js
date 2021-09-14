// initial reducer state
const initialState = [
    {
        id:0,
        name:'Alejandro Gimeno Ataz',
        age:28
    },
    {
        id:1,
        name:'Diana Garcia Orti',
        age:31
    }
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default contactReducer;