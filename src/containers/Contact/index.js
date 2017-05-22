import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {styles} from './styles.scss';

class Contact extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={`${styles}`}>
                <h1>Contact</h1>
                <MUI.RaisedButton label="Contact button example" secondary={true}/>
            </div>
        );
    }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...{},
    ...{}
}, dispatch))(Contact)
