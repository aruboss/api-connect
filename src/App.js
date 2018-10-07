import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import routes from './routes';
import { Switch, Route } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>

        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">
                Thêm Sản Phẩm
              </button>
              <ProductList/>

            </div>  */}
            {this.showContentMenus(routes)}
          </div>
        </div>
      </div>
    );
  }
  showContentMenus = (routes) => {
    var result = null;

    return <Switch>{result}</Switch>
  }
}

export default App;
