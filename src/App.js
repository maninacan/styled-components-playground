import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import logo from './logo.svg';

const AppStyle = styled.div`
  text-align: center;
`
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
`

const AppIntro = styled.p`
  font-size: large;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Button = styled.button`
  background: ${(props) => props.primary ? 'gray' : 'blue' };
  color: white;
`

const BiggerButton = Button.extend`
  padding: 5px 20px;
  font-size: 2em;
`


class App extends Component {
  render() {
    return (
      <AppStyle>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
          <Button onClick={() => console.log('I clicked the button!')}>Hi</Button>
          <Button primary onClick={() => console.log('I clicked the primary button!')}>Hi</Button>
          <BiggerButton onClick={() => console.log('I clicked the BIGGER button!')}>Hi</BiggerButton>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppStyle>
    );
  }
}

export default App;
