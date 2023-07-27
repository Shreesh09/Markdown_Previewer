import { marked } from 'marked';

const convertToJSX = (text) => {
    text = text.replace(/(\\r)|(\\n)/g, "  \n");
    marked.use({
        breaks: true,
    });
    const JSX = marked.parse(text);
    return (JSX);
    };

export{convertToJSX};
