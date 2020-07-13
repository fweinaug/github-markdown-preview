import React from 'react';

const Preview = (props) => {
  return (
    <div className="container-xl px-3 px-md-4 px-lg-6 my-4">
      <div className="gutter-condensed gutter-lg d-flex flex-md-row">
        <div className="flex-shrink-0 col-12 col-md-9 mx-md-auto">
          <div className="Box mt-4">
            <div className="Box-header d-flex flex-items-center flex-justify-between bg-white border-bottom-0">
              <h2 className="Box-title pr-3">
                README.md
              </h2>
            </div>
            <div className="Box-body px-5 pb-5">
              <section className="markdown-body container-lg"
                       dangerouslySetInnerHTML={{__html: props.html}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
