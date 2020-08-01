import React from 'react';

const ImageList = (props) =>{

    const images = props.images.map((el)=>{
        return <img key={el.id} src={el.urls.regular} alt={el.description} />
    })

    return(
        <div>{images}</div>
    );
}

export default ImageList;