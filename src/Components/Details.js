import React, { Component } from 'react'
import { ProductConsumer } from "../Context"
import { Link } from "react-router-dom"
import { ButtonContainer } from "./Button"

import styled from 'styled-components';



export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, title, inCart, price } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text_blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-capitalize col-10 mx-auto col-md-6 col-lg-4 my-3">
                                    <img src={img} className="img_fluid" alt="product" />

                                </div>
                                <div className="text-capitalize col-10 mx-auto col-md-6 my-3">
                                    <h2>model : {title}</h2>
                                    <h4 className="text_title text-uppercase text-muted mt-3 mb-2">this is made by: <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text_blue">
                                        <strong>Price : <span>$</span>{price}</strong>
                                    </h4>
                                    <p className="text-capitalize fw-bold mt-3 mb-0">some info about product: </p>
                                    <p className="text-muted  lead">{info}</p>
                                    <div >
                                        <Link to="/">
                                            <ButtonContainer>Back To Product</ButtonContainer>
                                        </Link>
                                        <ButtonContainer yellow disabled={inCart ? true : false} onClick={()=> {value.addToCart(id); value.openModal(id)}}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
