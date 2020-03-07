import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          Testing
        </Navbar>
      </header>
      <main>
        <Card style={{ width: '60%', margin: '0 auto'}}>
          Test
        </Card>
      </main>
      <footer>
        <Navbar bg="dark" variant="dark">
        </Navbar>
      </footer>
    </div>
  );
}

export default App;

























































































