import { marked } from 'marked';

const convertToJSX = (text) => {
    text = text.split("").map((c) => {
         if(c.charCodeAt(0) !== 10 && c.charCodeAt(0) !== 13)
             return c;
         else return "  \n";
     }).join("");

    text = text.replace(/(\\r)|(\\n)/g, "  \n");
    const JSX = marked.parse(text);
    return (JSX);
    };

export{convertToJSX};
