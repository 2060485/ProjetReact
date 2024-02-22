import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Recipes = () => {

    const [fields, setFields] = useState([{ name: '', calories: '', ingredients: '' }]);

    const handleChange = (index, e, key) => {
        const values = [...fields];
        values[index][key] = e.target.value;
        setFields(values);
      };
    
      const handleAddField = () => {
        const values = [...fields, { name: '', calories: '', ingredients: '' }];
        setFields(values);
      };
    
      const handleRemoveField = index => {
        const values = [...fields];
        values.splice(index, 1);
        setFields(values);
      };
  
    return (
        <div className="m-5 p-2 border border-primary">
        {fields.map((field, index) => (
          <form key={index}>
            <div className="row">
              <div className="col mb-2">
                <input type="text" className="form-control" placeholder="Name" value={field.name} onChange={e => handleChange(index, e, 'name')}
                />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Ingredients" value={field.ingredients} onChange={e => handleChange(index, e, 'ingredients')}
                />
              </div>
              <div className="col">
                <input type="text"className="form-control" placeholder="Calories" value={field.calories} onChange={e => handleChange(index, e, 'calories')}
                />
              </div>
              <div className="col">
                <button className="btn btn-danger" onClick={() => handleRemoveField(index)}>
                  Remove
                </button>
              </div>
            </div>
          </form>
        ))}
        <div className="row mt-2">
          <div className="col">
            <button className="btn btn-primary" onClick={handleAddField}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Recipes;