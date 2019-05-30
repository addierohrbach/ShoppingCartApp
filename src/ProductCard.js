import React, { Component } from 'react';
import { Card, CardText, CardBody, CardImg, CardSubtitle, button, CardTitle } from 'reactstrap';

class ProductCard extends Component {
    render() {
        return (
            <Card>
                <CardImg width="50%" height="50%" src={this.props.url} />
                <CardBody>
                    <h4><CardTitle>{this.props.title}</CardTitle></h4>
                    <h5><CardSubtitle>{this.props.currencyFormat}{this.props.price}</CardSubtitle></h5>
                    <CardText>{this.props.isFreeShipping}</CardText>
                    <button>Add to Card</button>
                </CardBody>
            </Card>
        )
    }
}

export default ProductCard;