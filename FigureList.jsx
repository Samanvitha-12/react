import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css";
const initialImages=[
    {src:"https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg", caption:"Image 1"},
     {src:"https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?cs=srgb&dl=pexels-steve-1070527.jpg&fm=jpg", caption:"Image 2"},
     {src:"https://t3.ftcdn.net/jpg/06/77/44/54/360_F_677445407_nX6l0w313ThzGEJe6BtuzgZoFYZ0m55y.jpg", caption:"Image 3"}
];
const FigureList =() =>{
    const [images,setImages]=useState(initialImages);
const addImage=()=>{
    const randomId=Math.floor(Math.random()*1000);
    const newImage={
        src:`https://picsum.photos/400/300?random =$(randomId)`,
        caption:`Image ${images.length+1}`
    };
    setImages([...images,newImage]);
};
const removeImage=(index)=>{
    setImages(images.filter((_,i)=>i!=index));

};
return(
    <div className="container">
        <h1>Dynamic Image Gallery</h1>
        <div className="buttons">
            <button onClick={addImage}>Add Image</button>

        </div>
        <div className="gallery">
          {images.map((image,index)=>(
            < BasicFigure key={index} src={image.src}
            caption={image.caption} onRemove={()=>removeImage(index)} />
          ))}
         
        </div>
    </div>
        );
    };
    export default FigureList;



    
