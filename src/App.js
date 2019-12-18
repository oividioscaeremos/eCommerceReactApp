import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import { Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubFromAuth = null;

  componentDidMount(){
    this.unSubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id:snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state);
          })
        });
      }

      this.setState({currentUser : userAuth});
    });
  }

  componentWillUnmount(){
    this.unSubFromAuth();
  }

  render(){
    return (
    <div>
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component ={HomePage}/>
        <Route path='/shop' component ={ShopPage}/>
        <Route path='/signin' component ={SignInAndSignUpPage}/>
    </div>
  );
  }
}

export default App;
