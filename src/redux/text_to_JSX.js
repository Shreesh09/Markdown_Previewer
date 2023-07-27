import { marked } from 'marked';

const convertToJSX = (text) => {
    const JSX = marked.parse(text);
    return (JSX);
    };

export{convertToJSX};
