import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    console.log(props)
    const images = props.images.map((el)=>{
        return <ImageCard key={el.id} image={el}/>
    })

    return(
        <div className="image-list">{images}</div>
    );
}

export default ImageList;