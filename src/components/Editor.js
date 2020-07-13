import React from 'react';

const Editor = (props) => {
  const copyClickHandler = () => {
    navigator.clipboard.writeText(props.text);
  }

  return (
    <div className="container-lg px-3 px-md-4 px-lg-6 mt-4">
      <div className="Box Box--condensed">
        <div className="Box-header d-flex flex-items-center">
          <h3 className="Box-title overflow-hidden flex-auto">
            Markdown
          </h3>
          <button className="btn" onClick={copyClickHandler}>Copy</button>
        </div>
        <div className="Box-body">
          <div className="form-group">
            <div className="form-group-body">
              <textarea className="form-control" rows={35} spellCheck={false}
                        onChange={props.textChange} value={props.text}
                        placeholder="Enter some Markdown and click the Preview button." />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" onClick={props.previewClick}>Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
