import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="d-flex justify-content-center mt-5 pt-5">
                <h1>Page not found</h1>
            </div>
        )
    }
}
