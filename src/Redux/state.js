import * as constants from "./constants";
import {convertToJSX} from './text_to_JSX';
import {createStore} from 'redux';
import * as actions from './actions';

const textReducer = (state = <div></div>, action) => {
  switch(action.type)
  {
      case constants.DISPLAY: return convertToJSX(action.text);
      default: return state;
  }
};

const store = createStore(textReducer);

const passStateToProps = (state) => ({
   content: state
});

const passActionsToProps = () => ({
   submitText(text) {
       actions.displayText(text);
   },
});

export {store, passStateToProps, passActionsToProps};