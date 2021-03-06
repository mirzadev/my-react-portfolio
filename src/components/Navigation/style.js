import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
      appBar: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '10px 50px',
            backgroundColor: 'teal',
            color: 'white'

      },
      image: {
            marginLeft: '15px',
      },
      toolbar: {
            display: 'flex',
            marginLeft: 'auto'
      },
      profile: {
            display: 'flex'
      },
      userName: {
            marginLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            width: '200px',
      },
      brandContainer: {
            display: 'flex',
            alignItems: 'center',
      },
      purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
      },
      loggedIn: {
            flexDirection: 'row',
            display: 'flex',
            marginLeft: '50px'

      },
      button: {
            marginRight: '5px',
            color: 'white'
      },
      signIn: {
            display: 'flex',
      },
      menuButton: {
            marginRight: theme.spacing(3),
      },
      root: {
            flexGrow: 1,
      },
      roundedPic: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginTop: '20px',
            alignSelf: 'center'
      },
      MuiIconButton: {
            color: 'white'
      }

}));