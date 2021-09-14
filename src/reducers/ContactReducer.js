// initial reducer state
const initialState = [
    {
        id:0,
        name:'Alejandro Mathews',
        email:'alexmail@mail.com',
        age:28
    },
    {
        id:1,
        name:'Tiana Doe',
        email:'TDoe@mail.com',
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