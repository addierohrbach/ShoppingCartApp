import React from 'react';
import {Card, Container} from 'semantic-ui-react';
import ProductCard from './ProductCard';

const App = ({products}) => {
    const skus = Object.keys(products);

    const items = skus.map(sku => {
        let price = products[sku].currencyFormat + products[sku].price;

        return (
            <ProductCard
                key={sku.toString()}
                url={"./data/products/" + sku.toString() + "_1.jpg"}
                title={products[sku].title}
                price={price}
                isFreeShipping="Free Shipping Available"
            />
        )
    })

    return (
        <Container fluid={false} >
            <Card.Group centered itemsPerRow={4}>
                {items}
            </Card.Group>
        </Container>
    )
};

export default App;