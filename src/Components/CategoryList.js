import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         categories: [
    //             { categoryId: 1, categoryName: "tatlı" },
    //             { categoryId: 2, categoryName: "icecek" },
    //             { categoryId: 3, categoryName: "yemek" },
    //             { categoryId: 4, categoryName: "salata" }
    //         ]
    //     }
    // }

    // yukarıdaki gibide yapabiliriz direk sade şekilde alttaki gibide yapabiliriz yeni kullanım
    state = {
        categories: [
            { categoryId: 1, categoryName: "tatlı" },
            { categoryId: 2, categoryName: "icecek" },
            { categoryId: 3, categoryName: "yemek" },
            { categoryId: 4, categoryName: "salata" }
        ],
        currentCategory: "",
    }

    changeCategory = (category) => {
        this.setState({ currentCategory: category.categoryName })
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.categoryDeneme}</h3>
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem
                            onClick={() => this.changeCategory(category)}
                            key={category.categoryId}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h1>{this.state.currentCategory}</h1>
            </div>
        )
    }
}
