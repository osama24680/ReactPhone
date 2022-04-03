import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../Context"
import PropTypes from "prop-types"

// if someone missed up with the data

const Card = styled.div`
    border:.04rem solid rgba(0,0,0,.2);
    transition: all .5s;
`
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
    background-color:#80808038!important;
    background: transparent;
    border-top:transparent;
    transition: all  .5s;
`
const Wrapper = styled.div`
    margin: 15px auto;
    &:hover ${Card}{
        border:.04rem solid rgba(0,0,0,.2);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
 
`
const PhoneImg = styled.img`
    width: 100%;
    transition: all 1s;
`

const FooterP = styled.p`
   align-self: center;
   margin-bottom:0;
`
const FooterH = styled.h5`
   font-style:italic;
   margin-bottom:0;
`
const FooterSpan = styled.span`
 
`
const CartBtn = styled.span`
 position: absolute;
 bottom: 0;
 right:0;
 padding: 0% .2rem .4rem;
 background-color: var(--lightBlue);
 border:none;
 color:var(--mainWhite);
 font-size: 1.4rem;
 border-radius:.5rem 0 0 0;
 transform: translate(100%,100%);
 transition: all .5s;
 &:hover{
     color:var(--mainBlue);
     cursor: pointer;
 }
`

const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding: 50px;
    &:hover ${PhoneImg}{
        transform: scale(1.2);
    }
    &:hover ${CartBtn}{
        transform: translate(0,0);
    }
`
const CartP = styled.span`
 text-transform: capitalize;
 margin-bottom: 0;
`

export default class Product extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    let { title, img, price, company, info, inCart, count, total, id } = this.props.product
                    return (
                        <Wrapper className="col-9  col-md-6 col-lg-3 ">
                            <Card >
                                <ImgContainer onClick={() => value.handleDetail(id)}>
                                    <Link to="details">
                                        <PhoneImg src={img} alt="phone" />
                                    </Link>
                                    <CartBtn disabled={inCart ? true : false} onClick={() =>{ value.addToCart(id); value.openModal(id)}}>
                                        {inCart ? (<CartP disabled>inCart</CartP>) : (<i className="fas fa-cart-plus"></i>)}
                                    </CartBtn>
                                </ImgContainer>
                                <Footer >
                                    <FooterP>{title}</FooterP>
                                    <FooterH className="text_blue">
                                        <FooterSpan >$</FooterSpan>
                                        {price}
                                    </FooterH>
                                </Footer>
                            </Card>
                        </Wrapper>
                    )
                }}

            </ProductConsumer>

        )
    }
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired

}