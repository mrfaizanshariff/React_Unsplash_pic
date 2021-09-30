import React from "react";
import "./imageList.css";
import ImageCard from "./imageCard";
const ImageList = (props) => {
  console.log(props.image);

  // assigning the returned image from api call to a variable
  const images = props.image.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
