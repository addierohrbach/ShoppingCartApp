import React, { Component } from 'react';
import { Card, Button, Container } from 'semantic-ui-react';

class ProductCard extends Component {
    render() {
        const extra = (
            <Container>
                <Button.Group className={sizes} fluid={true}>
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                </Button.Group>
                <Button primary={true} className={addButton} fluid={true}>Add to Cart</Button>
            </Container>
        );

        return (
            <Card
                image={this.props.url}
                header={this.props.title}
                description={this.props.price}
                extra={extra}
            />
        )
    }
}

export default ProductCard;

const sizes = {
    paddingBottom: 20,
};

const addButton = {
    marginTop: 20,
    justifyContent: 'center',
};