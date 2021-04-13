import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {green} from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette:{
          primary:{
           main: green[500]
	  }
	}
})

export const Theme = (props) =>{
 return(
  <ThemeProvider theme={theme}>
    {props.children }
  </ThemeProvider>
 );
}
