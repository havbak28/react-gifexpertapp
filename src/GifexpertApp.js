import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifexpertApp = () => {

    const [categories, setCategories] = useState(['Caballeros del Zodiaco']);
    
    const handleAdd = () => {
        setCategories( cats => [...cats, 'Remi'] );
    }

    return (
        <>
            <h2>GifexpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { 
                    categories.map((category, i) => (
                        <GiftGrid 
                        key= { category } 
                        category={ category }/>
                    ))
                 }
            </ol>
        </>
    )
}
