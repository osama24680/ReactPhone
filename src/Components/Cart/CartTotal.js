import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components';

export const Row = styled.div`
    /* display: flex;
    justify-content: flex-start;
    width:300px;
     */
`;
export const SubRow = styled.div`
   /* width: 100%; */
`;

export default function CartTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value
    return (
        <React.Fragment>
            
                <Row className=" w-25 container d-flex justify-content-end">
                    <SubRow className="col-10 mt-2 me-sm-5  col-sm-8 text-capitalize text-center py-5">
                        <Link to="">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">Subtotal: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax: </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total: </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </SubRow>
                </Row>
            
        </React.Fragment>
    )
}
