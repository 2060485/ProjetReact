import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './catalogue.css'

function Catalogue() {
    const [recipes, setrecipes] = useState([]);

    const getAllrecipes = () => {
        axios.get("http://localhost:7373/getrec")
            .then((res) => {
                setrecipes(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getAllrecipes();
    }, []);

    return (
        <div className='container mt-4 content container-recipes'>
            <h2 className='text-center mb-4'>Catalogue</h2>
            <div className='row'>
                {recipes.map((recipe) => (
                    <div className='col-lg-4 col-md-6 mb-4'>
                       <Link to={`/catalogue/${recipe.recipe_name.replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
                            <div className='card'>
                                <img className='card-img-top' src={recipe.img} alt={recipe.recipe_name} style={{ height: '350px' }} />
                                <div className='card-body' style={{ height: '200px' }}>
                                    <h5 className='card-title'>{recipe.recipe_name}</h5>
                                    <p className='card-text'>Calories: {recipe.calories}</p>
                                    <p className='card-text'>{recipe.descriptions}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalogue;
