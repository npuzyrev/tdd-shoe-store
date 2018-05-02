import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Product Store</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
