import React, { Component } from 'react'
import Checkboxs from './Checkboxs';
import Colors from './Colors'


class Sidebar extends Component {
  render() {
    // console.log("types",this.props.types, this.props.checked )
    // const {checked} = this.props.checked
    return (
      <div  className="sidebar">
       <hr/>
        { 
          this.props.types.type.map(itemTypes => {
            return  <React.Fragment>
                      <Checkboxs 
                        key={itemTypes} 
                        onChange={this.props.handleInput} 
                        itemTypes={itemTypes}
                      /><br/>
                    </React.Fragment> 
          })
        }
      <hr/>
        { 
          this.props.types.color.map(colors => {
            return <React.Fragment>
                      <Colors 
                        key={colors} 
                        onChange={this.props.handleInput} 
                        colors={colors}
                      /><br/>
                  </React.Fragment>
          })
        }
      <hr/>
      </div>
    )
  }
}

export default Sidebar
