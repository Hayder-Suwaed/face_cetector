import React from "react";
import "./ImageLinkForm.css";
function ImageLinkForm() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <p className="f3">
          {"This Magic Brain will detect faces in your picture"}
        </p>
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-80 center" type="text" />
          <button className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
