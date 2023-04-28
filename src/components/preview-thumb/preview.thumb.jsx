import React from "react";
import Wrapper from "./preview.thumb.style";
import Me from "../../assets/images/me.jpeg";

const PreviewThumb = ({ src, fileName }) => {
  return (
    <Wrapper className="preview-thumb">
      <img src={src || Me} alt="thumb preview" />
    </Wrapper>
  );
};

export default PreviewThumb;
