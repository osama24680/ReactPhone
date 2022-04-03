import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from "../Context"
import { ButtonContainer } from "./Button"
import { Link } from "react-router-dom"


export default class Modal extends Component {
    render() {
        return (
                <ProductConsumer>
                    {(value) => {
                        const { modalOpen, closeModal } = value
                        const { img, title, price } = value.modalProduct
                        if (!modalOpen) {
                            return null;
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <Modalx  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                <h5>item added to cart</h5>
                                                <img src={img} className="img-fluid" alt="phone" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">price : $ {price}</h5>
                                                <Link to="/">
                                                    <ButtonContainer  onClick={()=> closeModal()}>Stor</ButtonContainer>
                                                </Link>
                                                <Link to="cart">
                                                    <ButtonContainer yellow onClick={()=> closeModal()}>Go To Cart</ButtonContainer>
                                                </Link>
                                            </Modalx>
                                        </div>
                                    </div>
                                </ModalContainer>
                            )
                        }
                    }}
                </ProductConsumer>
        )
    }
}

export const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center
    
`;
export const Modalx = styled.div`
    background-color: var(--mainWhite);
    
`;