import React from 'react'
import './SearchComponent.sass';
import searchImg from '../../assets/img/search.png'
import logoMeli from '../../assets/img/logo-meli.png'
import { useHistory } from "react-router-dom";
import {Link } from 'react-router-dom';


const SearchComponent = (props) =>{

    const [search, setSearch] = React.useState('');
    let history = useHistory();

    const onSubmit = (e) =>{
        e.preventDefault();
        props.searchProducts(search);
        history.push(`/items?search=${search}`);
    }


    return (
        <div className="search-bar row center-xs">
            <form className="col-xs-10" onSubmit={onSubmit}>
                <Link to="/">
                    <img src={logoMeli} alt="Mercado Libre" id="logo-meli"/>
                </Link>
                <input type="text" id="search-input" name="search" placeholder="Nunca dejes de buscar" onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" id="search-button"><img src={searchImg} alt="Search" id="search-img"/></button>  
            </form>
        </div>
    )
}

export default SearchComponent