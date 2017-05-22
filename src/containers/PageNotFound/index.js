import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {styles} from './styles.scss'

class PageNotFound extends React.Component {
    constructor() {
        super()
    }

    render = () => {
        return (
            <div className={`${styles}`}>
                <h1>Page not found</h1>
            </div>
        )
    }
}

export default connect(null, dispatch => bindActionCreators({
    ...{},
    ...{}
}, dispatch))(PageNotFound)
