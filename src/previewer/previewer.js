import React from "react";
import {defaultPreview} from "./previewer_contants";

class Previewer extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }
    componentDidMount() {
        this.props.submitText(defaultPreview);
        console.log(this.props.content);
        this.setState({
            input: defaultPreview,
        });
    }

    handleChange = (event) => {
        this.setState((oldState) => {
            this.props.submitText(event.target.value);
            return {input: event.target.value,};
        });
    }

    render() {
        return(
          <div id="body">
              <div id="edit">
                  <textarea id="editor" typeof="textarea" value={this.state.input} onChange={this.handleChange}/>             </div>
              <div id="preview"><div dangerouslySetInnerHTML={this.props.content} /></div>
          </div>
        );
    }
}

export {Previewer};