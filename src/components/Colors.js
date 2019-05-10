import React from 'react'
import Proptype from 'prop-types'

const Colors = ({ type="checkbox", checked, colors, onChange}) => {
  return <label>
          <input 
            type={type}
            checked={checked}
            value={colors}
            onChange={(e)=> onChange(e)}
          />
          { colors }
         </label>
}

Colors.proptype = {
  type: Proptype.string,
  onChange: Proptype.func.isRequired,
  colors: Proptype.string.isRequired,
  checked: Proptype.bool
}
export default Colors

