import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css"

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>;
    })
    return <h1 className="image-list">{images}</h1>
};

export default ImageList;