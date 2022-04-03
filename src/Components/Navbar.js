import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/logo.svg"
import styled from 'styled-components';
import { ButtonContainer } from "./Button"

export const NavWrapper = styled.nav`
    color:red;
    background-color: var(--mainBlue);
    padding:10px 60px;
    .nav_link{
        color:var(--mainWhite) !important;
        font-size: 1.4rem;
        text-transform: capitalize;
        text-decoration: none;
    }
`
export default class componentName extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-s ">
                    <Link to="/"><img src={logo} alt="" /></Link>

                    <div className="d-flex justify-content-between w-100">
                        <ul className="navbar-nav ms-5 align-items-center">
                            <li >
                                <Link to="/" className='nav_link'>Products</Link>
                            </li>
                        </ul>

                        <Link to="/cart" >
                            <ButtonContainer >
                                <span className="me-2">
                                    <i className="fas fa-cart-plus" />
                                </span>
                                my cart
                            </ButtonContainer>
                        </Link>
                    </div>
                </NavWrapper>
            </div>
        )
    }
}

