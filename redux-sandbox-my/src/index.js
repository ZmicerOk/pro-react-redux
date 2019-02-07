import {createStore} from "redux";

// const initialState = 0;

const reducer = (state=0, action) => {
    switch (action.type) {
        case "INC": return state+1;
        case "DEC": return state-1;
        default: return state;
    }
};

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
