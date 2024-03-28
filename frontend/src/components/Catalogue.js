import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './catalogue.css'
import Footer from './Footer';

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
        <div className='container mt-4 content container-recipes'>
            <h2 className='text-center mb-4'>Catalogue</h2>
            <div className='row'>
                {recettes.map((recette) => (
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className='card'>
                            <img className='card-img-top' src={recette.img} alt={recette.recipe_name} style={{height: '350px'}} />
                            <div className='card-body' style={{height: '200px'}}>
                                <h5 className='card-title'>{recette.recipe_name}</h5>
                                <p className='card-text'>Calories: {recette.calories}</p>
                                <p className='card-text'>{recette.descriptions}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalogue;
