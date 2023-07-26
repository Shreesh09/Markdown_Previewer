import * as constants from "./constants";

const displayText = (text) => ({
    type: constants.DISPLAY,
    text: text,
});

export {displayText};
