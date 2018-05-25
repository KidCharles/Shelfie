import React from 'react';
// import Form from '../Form/Form.js';

export default function Product(props) {

    return (
        <div>
            <hr />
            <p>Product</p>
            <img src={props.url} />
            <div>
                <p>name:{props.name}</p>
                <p>${props.price}</p>

            </div>
            <div>
                <button type='text' onClick={() => { props.deleteItem() }} >delete</button>
                <button type='text'>edit</button>
            </div>
            <hr />
        </div>
    )
}