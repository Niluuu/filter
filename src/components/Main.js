import React, { Component } from 'react'

class Main extends Component {
  render() {
    // console.log("api", this.props.api)
    return (
      <div className="main">
        {
          this.props.items.map(product => {
            return <Product product={product} />
          })
        }
      </div>
    )
  }
}


const Product = ({product}) => {
  return <div className="product-box">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
}

export default Main
