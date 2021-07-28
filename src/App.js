import logo from './logo.svg';
import './App.css';
import React from 'react'
import Profile from './profile/Profile'

function App() {
  const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing orehenderit in voluptate velit esse cillum dolore eu fugia"
  const name="ahmed belhaj"
  const profession="futur ingénieur"
  return (
    <div className="App">
      <Profile fullname={name} bio={lorem} profession={profession} />
    </div>
  );
}

export default App;
