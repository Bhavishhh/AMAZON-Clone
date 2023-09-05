import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() 
{
  const [{basket,user}, dispatch] = useStateValue();

  const handleauthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo' src='https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&h=180'/>
        </Link>

        <div className='header_search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header_searchIcon'/>
            {/* Logo */}
        </div>


        <div className='header_nav'>
        <Link to={!user && "/login"}>
            <div  onClick={handleauthentication} className='header_option'>
                <span className='header_optionlineone'>Hello {!user? 'Guest':user.email}</span>
                <span className='header_optionlinetwo'>{user ? 'Sign Out': 'Sign In'}</span>
            </div>
        </Link>

            <div className='header_option'>
                <span className='header_optionlineone'>Returns</span>
                <span className='header_optionlinetwo'>& orders</span>
            </div>

            <div className='header_option'>
                <span className='header_optionlineone'>Your</span>
                <span className='header_optionlinetwo'>Prime</span>
            </div>

            <Link to='checkout'>
                <div className='header_optionbasket'>
                    <ShoppingCartIcon />
                    <span className='header_optionlinetwo header_basketcount'>{basket?.length}</span>
                </div>
            </Link>

        </div>

    </div>
  );
}

export default Header
