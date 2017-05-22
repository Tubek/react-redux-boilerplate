import Navigation from 'components/Navigation';
import './styles/app.scss';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange500} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
})

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <MUI.MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Navigation {...this.props}/> {this.props.children}
                </div>
            </MUI.MuiThemeProvider>
        );
    }
}

export default App
