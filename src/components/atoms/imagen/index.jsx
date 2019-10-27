import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Imagen =(props)=>{
    return(
        <figure>
            <img src={props.image} alt={props.autor} />
        </figure>
    );
}
export default Imagen;

Imagen.propTypes = {
  image: PropTypes.string,
  autor: PropTypes.string
};
