import { marked } from 'marked';

const convertToJSX = (text) => {
    text = text.split("").map((c) => {
         if(c.charCodeAt(0) !== 10 && c.charCodeAt(0) !== 13)
             return c;
         else return "  \n";
     }).join("");
    console.log(text);
    text = text.replace(/(\\r)|(\\n)/g, "  \n");
    //console.log(text.charCodeAt(0));
    const JSX = marked.parse(text);

    return (JSX);
    };

export{convertToJSX};
