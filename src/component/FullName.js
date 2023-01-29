import React from 'react';
import PropTypes  from 'prop-types';
import './fullname.css'

export default function FullName({
    additional,
    diet,
    name,
    scientificName,
    showAdditional

  }) {
    return (
    
      <div className='fullname-wrapper'>
        <h2>{name}</h2>
        <h3>{scientificName}</h3>
    
        <div>{diet.join(', ')}.</div>
        <button onClick={() => showAdditional(additional)}>More Info</button>
      </div>
    );
  }

  
FullName.propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,

  }
  

  FullName.defaultProps = {
    additional: {
      notes: 'No Additional Information'
    }
  }
