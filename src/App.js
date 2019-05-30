import React from 'react';
import { CardColumns } from 'reactstrap';
import ProductCard from './ProductCard';

const App = ({products}) => {
  const skus = Object.keys(products);

  const items = skus.map(sku => {
    if (products[sku].isFreeShipping === true) {
      return(
          <ProductCard
            key={sku.toString()}
            url={"./data/products/" + sku.toString() + "_1.jpg"}
            title={products[sku].title}
            currencyFormat={products[sku].currencyFormat}
            price={products[sku].price}
            isFreeShipping="Free Shipping Available"
          />
      )
    } else {
      return(
          <ProductCard
              key={sku.toString()}
              url={"./data/products/" + sku.toString() + "_1.jpg"}
              title={products[sku].title}
              currencyFormat={products[sku].currencyFormat}
              price={products[sku].price}
          />
      )
    }
  })

  return (
      <CardColumns>
        {items}
      </CardColumns>
  )
};

export default App;