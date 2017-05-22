import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {styles} from './styles.scss'

class Navigation extends React.Component {

    constructor() {
        super()
    }

    isActive = (pathname) => {
        return this.props.location.pathname.indexOf(pathname) !== -1 || this.props.location.pathname === '/'
            ? "active"
            : ''
    }

    render = () => {
        const {user} = this.props;
        return (
            <div className={`${styles}`}>
                <a href="#/home" className={this.isActive('home')
                    ? "active"
                    : null}>home</a>
                <a href="#/contact" className={this.isActive('contact')
                    ? "active"
                    : null}>contact</a>
                <span className='info'>[env: {process.env.NODE_ENV}]</span>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...{},
    ...{}
}, dispatch))(Navigation)
