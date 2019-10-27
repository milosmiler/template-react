import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MainTitle =(props)=>{
    return(
        <h1>{props.title}</h1>
    );
}
export default MainTitle;


MainTitle.propTypes = {
  title: PropTypes.string
};
