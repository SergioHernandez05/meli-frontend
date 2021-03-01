import React, {Component} from 'react'
import { BACKEND_ENDPOINT } from './constants';
import SearchComponent from './components/searchComponent/SearchComponent';
import ListProductsComponent from './components/listProductsComponent/ListProductsComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {

  state = {
    products:[],
    categories:[],
    query:''
  }

  searchProducts = async (query) => {
    const response = await fetch(`${BACKEND_ENDPOINT}/api/items?q=${query}`);
    this.setState({query:query});
    const data = await response.json();
    if(data)
      this.setState({products: data.items, categories:data.categories});
    }
    
    
    
  render() {
    return (
      <div>
        <SearchComponent searchProducts={this.searchProducts}/>

          <Route path="/items/:id" exact>
            <ProductComponent product={this.state.products} categories={this.state.categories}/>
          </Route>
          <Route path="/items" exact>
            <ListProductsComponent products={this.state.products} categories={this.state.categories}/>
          </Route>
      </div>
    );
  }
  
}

export default withRouter(App)