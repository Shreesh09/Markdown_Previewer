import React from "react";
import {defaultPreview} from "./previewer_contants";
import './previewer_style.css';
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
              <div id="box">
                <div id="edit">
                    <h3 className={"editor-title"}>Write your markdown here</h3>
                    <textarea id="editor" typeof="textarea" value={this.state.input} onChange={this.handleChange}/></div>
                <div id="preview-box">
                    <h3 className={"preview-title"}>Preview</h3>
                    <div id={"content"}>
                         <div id={"preview"} dangerouslySetInnerHTML={this.props.content} />
                    </div>
                </div>
              </div>
          </div>
        );
    }
}

export {Previewer};