import * as constants from "./constants";
import {convertToJSX} from './text_to_JSX';
import {createStore} from 'redux';
import * as actions from './actions';

const defaultState = {
    __html: <div></div>,
}

const textReducer = (state = defaultState, action) => {
  switch(action.type)
  {
      case constants.DISPLAY: return {
          __html: convertToJSX(action.text),
      };
      default: return state;
  }
};

const store = createStore(textReducer);

const passStateToProps = (state) => ({
   content: state
});

const passActionsToProps = (dispatch) => ({
   submitText(text) {
       dispatch(actions.displayText(text));
   },
});

export {store, passStateToProps, passActionsToProps};