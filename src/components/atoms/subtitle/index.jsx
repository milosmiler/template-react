import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Subtitle = (props) =>{
    return(
        <h2>{props.title}</h2>
    );
}
expor default Subtitle;


Subtitle.propTypes = {
  title: PropTypes.string
};
