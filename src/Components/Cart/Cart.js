import React, { Component } from 'react'
import { ProductConsumer } from "../../Context"
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCard from "./EmptyCard"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 98%;
    margin: auto;
`;

export default class Cart extends Component {
    render() {
        return (
            <Wrapper >
                <ProductConsumer>
                    {(value) => {
                        console.log(value)
                        const { cart } = value
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <EmptyCard /> 
                                </>
                            )
                        }
                    }}
                </ProductConsumer>
            </Wrapper>
        )
    }
}
