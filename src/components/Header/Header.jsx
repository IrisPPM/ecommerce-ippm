import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '@/assets/logo.png'

const Header = () => {
  return (
    <nav className='header'>
      <div className='header__left'>
        <Link to='/' className='header__logo'>
          <img className='header__logo__img' src={logo} alt='logo' />
        </Link>
        <input className='header__input' type='text' placeholder='Buscar producto' />
      </div>
      <ul className='header__nav-list'>
        <li className='header__list-item'><Link to='/' className='item-link'>Home </Link></li>
        <li className='header__list-item'><Link to='/Products' className='item-link'>Productos</Link></li>
        <li className='header__list-item'><Link to='/login' className='item-link'>Login</Link></li>
        <li className='header__list-item'><Link to='/register' className='item-link'>Register</Link></li>
      </ul>
    </nav>

  )
}

export default Header
