import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {styles} from './styles.scss'
import * as counterActions from 'actions/counter'
import Loader from 'components/loader'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.handleTouchTap = this.handleTouchTap.bind(this)

        this.handleDec = this.handleDec.bind(this)
        this.handleInc = this.handleInc.bind(this)
        this.multiDispatchExample = this.multiDispatchExample.bind(this)

        this.state = {
            open: false
        };
    }

    handleInc = () => {
        this.props.counterInc()
    }

    handleDec = () => {
        this.props.counterDec("testParam")
    }

    multiDispatchExample = () => {
        this.props.multiDispatchExample("testParam")
    }

    handleRequestClose = () => {
        this.setState({open: false})
    }

    handleTouchTap = () => {
        this.setState({open: true})
    }

    render = () => {
        const standardActions = (<MUI.FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose}/>);

        return (
            <div className={`${styles}`}>
                <h1>Home</h1>
                <div className="logo"></div>
                <MUI.Dialog open={this.state.open} title="Dialog" actions={standardActions} onRequestClose={this.handleRequestClose}>
                    Dialog content
                </MUI.Dialog>
                <MUI.RaisedButton label="open modal" secondary={true} onTouchTap={this.handleTouchTap}/>
                <div className="example-counter">
                    <MUI.RaisedButton label="-" secondary={true} onTouchTap={this.handleDec}/>
                    <span>{this.props.counterValue}</span>
                    <MUI.RaisedButton label="+" secondary={true} onTouchTap={this.handleInc}/>
                </div>
                <MUI.RaisedButton label="multi dispatch" secondary={false} onTouchTap={this.multiDispatchExample}/>
                <div>
                    {this.props.loading
                        ? "loading..."
                        : null}
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {counterValue: state.counter.get('value'), loading: state.counter.get('loading')}
}

export default connect(mapStateToProps, dispatch => bindActionCreators({
    ...counterActions,
    ...{}
}, dispatch))(Home)
