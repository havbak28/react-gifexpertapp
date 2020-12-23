import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
   const { data:images, loading } =  useFetchGifs(category);

    return (
        <>
         <h3 className="animate_animated animate_fadeIn">{ category }</h3>
         { loading && <p className="animate_animated animate_flash">Loading</p>}
        
        {
            <div className="card-grid">
            {
                images.map( ( img ) => (
                    <GifGridItem 
                        key={img.id}
                        { ...img}  
                    />
                ))
            }
        </div>
        }
        </>
    )
}
