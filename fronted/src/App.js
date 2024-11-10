import './App.css';
import Routing from './component/routes'
import Navbar from './component/navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();


const App = () => {
  return (

  <ThemeProvider theme={theme}>
    <Navbar />
    <Routing />       
 </ThemeProvider>
  
  );
}

export default App;
