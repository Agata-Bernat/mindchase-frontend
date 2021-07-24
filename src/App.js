import Register from "./components/users/Registration";
import ForgotPassword from "./components/users/ForgotPassword";
//import NewPassword from "./components/users/NewPassword";
import { Route, BrowserRouter as Router, Switch ,Redirect} from "react-router-dom";
import Login from "./components/users/Login";
import Fees from "./components/pages/Fees";
import { ThemeProvider, CssBaseline ,createTheme} from "@material-ui/core";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Workshop from "./components/Workshops/WorkshopBody"
import AddQuiz from "./components/quiz/AddQuiz"
import useToken from './components/useToken';
import Welcome from './components/pages/Welcome'
import VideoPlayer from "./components/video/VideoPlayer";
import Chat from './components/chat/Chat'
const theme = createTheme({
  palette: {
    primary: {
      main: '#F0E7E1',
      light:'#ffe082'
    },
    secondary :{
      main :'#FF1616'
    }  
  },
})

const App = () => {
  const { token, setToken } = useToken();
  return (
    <>
      <Router>
        <ThemeProvider theme={theme} >
        <CssBaseline />
        <header>
           <Navbar token={token} setToken={setToken}   />
        </header>  
          <Switch>
            <Route  path="/"
                     exact
                      component={HomeBanner} />
            
            <Route  path="/welcome" 
                      component={Welcome} />

              <Route path="/login" 
                render={(props) => <Login {...props} setToken={setToken} />}  />

              <Route path="/fees" 
                render={(props) => <Fees {...props}   />} />

              <Route path="/register"
                render={(props) => <Register {...props} setToken={setToken} /> }/>

              <Route  path="/forgotpassword"
                render={(props) => <ForgotPassword {...props} setToken={setToken} />}/>

             
              <Route  path="/about" 
                 redirect="/FooterComponents"/>   

            {token  ? <>
                <Route path="/workshops"
                render={ (props) => <Workshop {...props} setToken ={setToken}  />  } 
                component={Workshop} />

                  <Route path="/video-player" 
                  render={ (props) => <VideoPlayer {...props} setToken ={setToken}  />  } 
          />

                <Route  path="/messages" 
                  render={ (props) => <Chat {...props} setToken ={setToken}  />  } /> 
              </>  :
              <Redirect to ='/welcome' />
            }  
                   
              <Route  path="/quiz" 
                  component={AddQuiz} />

              
          </Switch>
         
        </ThemeProvider>
      <footer>
        <FooterComponent />
      </footer>
      </Router>
    </>
  );
};

export default App;
