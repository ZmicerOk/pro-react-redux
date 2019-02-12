import {createStore, bindActionCreators} from "redux";
import {reducer} from './reducer';
import *as actions from './actions';
// const initialState = 0;
//113 bindActionCreators
//114 Использование React и Redux

const store = createStore(reducer),
      {dispatch} = store,
      //bindActionCreator = (creator, dispatch) => (...args) => {dispatch(creator(...args))},
      {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', ()=>{
    const payload = Math.floor(Math.random()*10);
    rnd(payload);
    });


const update = () => {
document.getElementById('counter').innerHTML=store.getState();
};

store.subscribe(update);
