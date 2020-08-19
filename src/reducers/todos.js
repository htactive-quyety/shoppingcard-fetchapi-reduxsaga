const initialState = {
    productList: [],
    userList:[]
};


const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                state,
                productList: action.payload
            };
            case 'FETCH_USER':
            return {
                state,
                userList: action.payload
            };
        // case 'GETID_PRODUCTS':
        //     return {
        //         state,
        //         productList: action.payload
        //     };

        default:
            return state;
    }
}

export default todos;