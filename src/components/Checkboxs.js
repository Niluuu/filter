import React from 'react'
import PropTypes from 'prop-types'


const Checkboxs = ({ type="checkbox", itemTypes, checked, onChange }) => {
  return  <label>
            <input 
              type={type} 
              name={itemTypes} 
              checked={checked} 
              onChange={(e)=> onChange(e,itemTypes,checked)}
              value={itemTypes}
            />
            {itemTypes}
          </label>
}

Checkboxs.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string

}

export default Checkboxs