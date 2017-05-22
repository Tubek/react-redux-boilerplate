import React, {Component} from 'react'
import {Loader as Progress} from 'react-loaders'

export default class Loader extends Component {
    render() {
        return (
            <div>
                <Progress type="ball-pulse" active/>
            </div>
        )
    }
}
