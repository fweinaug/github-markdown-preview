import React, { Component } from 'react';
import { Octokit } from "@octokit/core";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import './App.scss';

class App extends Component {
  state = {
    text: null,
    html: null
  }

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  previewClickHandler = async () => {
    const octokit = new Octokit();

    const response = await octokit.request('POST /markdown/raw', {
      data: this.state.text,
      headers: {
        'content-type': 'text/plain; charset=utf-8'
      }
    });

    this.setState({
      html: response.data,
    });
  }

  render() {
    return (
      <div className="App">
        <p className="f2-light text-gray-light text-center">GitHub Markdown Preview</p>
        <Editor text={this.state.text}
                textChange={this.textChangeHandler.bind(this)}
                previewClick={this.previewClickHandler.bind(this)} />
        {this.state.html ? <Preview html={this.state.html} /> : null}
      </div>
    );
  }
}

export default App;
