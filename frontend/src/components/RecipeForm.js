import React, { useState } from 'react';
import './recipeform.css';

function RecipeForm() {

return (
    <div class="page-wrapper bg p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                    <div class="card-body">
                        <h2 class="title">Let us do the heavy work!</h2>
                        <h5 class="title mt-1">We'll put together some recipes from our catalog for you.</h5>
                        <form method="POST">
                        
                        <div class="mt-3">
                        <label class="form-label">Your weight.</label>
                        <form class="form-floating">
                            <input type="number" min="0" max="500" class="form-control" id="floatingInputValue"></input>
                            <label for="floatingInputValue">in lbs</label>
                        </form>
                        </div>

                        <div class="mt-3">
                        <label class="form-label">Are you vegan?</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>No preference</option>
                            <option value="1">Vegan</option>
                            <option value="2">Vegetarian</option>
                        </select>
                        <div class="form-text">We won't recommend a dish that goes against your preference.</div>
                        </div>

                        <div class="p-t-30">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

);
}

export default RecipeForm;