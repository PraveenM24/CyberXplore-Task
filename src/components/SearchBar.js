import React, { useContext, useState } from 'react';
import './SearchBar.css';
import { Button } from '@material-ui/core';
import { UserContext } from './../Context';
import { useHistory } from 'react-router-dom';

function SearchBar() {

    const user = useContext(UserContext);
    const [domain, setDomain] = useState();
    const history = useHistory();
    
    
    const searchDomain = e => {
        e.preventDefault();
        user.domain = domain;
        history.push('/result');
    }   

    return (
        <div className="searchbar">
            <div className="searchbar__card">
                <h4>A Fast Subdomain Enumeration Tool With IP Resolving & HTTP Status Code Presented By  </h4>
                <img src="https://edu.cyberxplore.com/wp-content/uploads/2020/06/4.png" height="50px"/>
            </div>   
            {/* <h4 className="searchbar__subtitle">Enter the domain</h4> */}
            <form className="searchbar__input"  
                    onSubmit={searchDomain}>
                <input     
                    onChange = {e => setDomain(e.target.value)}
                    placeholder="Enter the domain"
                    required
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                > Search 
                </Button>
            </form>         
        </div>
    )
}

export default SearchBar
