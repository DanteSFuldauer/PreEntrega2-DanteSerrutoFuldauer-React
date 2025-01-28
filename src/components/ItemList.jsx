// src/components/ItemList.jsx
import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ products, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <div className="card h-100">
            <img
              src={product.img}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.descrip}</p>
              <p className="card-text fw-bold">${product.price}</p>
              <div className="card-buttons">
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Detalles
                </Link>
                <button
                  className="btn btn-success"
                  onClick={() => onAddToCart(product)}
                >
                  Agregar al carrito
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveFromCart(product)}
                >
                  Eliminar del carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
