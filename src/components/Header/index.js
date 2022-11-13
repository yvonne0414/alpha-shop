import {Link} from 'react-router-dom'
import {ReactComponent as Toggle} from '../../assets/icons/toggle.svg' 
import {ReactComponent as Logo} from '../../assets/icons/logo.svg' 
import {ReactComponent as Search} from '../../assets/icons/search.svg' 
import {ReactComponent as Cart} from '../../assets/icons/cart.svg' 
import {ReactComponent as Sun} from '../../assets/icons/sun.svg' 
import {ReactComponent as Moon} from '../../assets/icons/moon.svg' 

const Header = () => {
  return (   
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <div className="icon-toggle cursor-point">
            <Toggle/>
          </div>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#">男款</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">女款</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">最新消息</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">客製商品</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">聯絡我們</Link>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <div className="nav-icon cursor-point">
                <Search/>
              </div>                              
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <div className="nav-icon cursor-point">
                <Cart/>
              </div>
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* <!-- moon --> */}
              <div className="nav-icon cursor-point ">
                <Moon/>
              </div>               
              {/* <!-- sun --> */}
              {/* <div className="nav-icon cursor-point hidden">
                <Sun/>
              </div> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <Link className="header-logo-container" to="#">
          <div className="icon-logo cursor-point">
            <Logo/>
          </div>
        </Link>
      </div>
    </header>)
}
export default  Header;