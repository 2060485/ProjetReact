import './catalogue.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Catalogue() {
    const [recettes, setRecettes] = useState([]);

    const getAllRecettes = () => {
        axios.get("http://localhost:7373/getrec")
            .then((res) => {
                setRecettes(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getAllRecettes();
    }, []);

    return (
        <div className='Produits-main'>
            <div>
                <h2>Catalogue</h2>
            </div>
            <div>
                <div className='produits-grid'>
                    {recettes.map((recette, index) => (
                        <div className='produits-card' key={index}>
                            <img className='produits-image' src={recette.img} alt={recette.recipe_name}/>
                            <div className='produits-nom'>{recette.recipe_name}</div>
                            <div className='produits-calories'>Calories: {recette.calories}</div>
                            <div className='produits-calories'>{recette.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalogue;
