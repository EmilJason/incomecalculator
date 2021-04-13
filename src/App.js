import {Typography, Button } from "@material-ui/core"
import {Theme} from './context/Theme'
function App() {
  return (
    <Theme>
     <Typography variant="p">
	  Income Calculator
     </Typography>

     <Button variant="contained" color="primary">
       Login
     </Button>
    </Theme>
  );
}

export default App;
