import './Header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo'> LOGO </a>
      <input type='text' />
      <ul className='header__nav-list'>
        <li className='header__list-item'><a href='/' className='item-link'>Home</a></li>
        <li className='header__list-item'><a href='/login' className='item-link'>Login</a></li>
        <li className='header__list-item'><a href='/register' className='item-link'>Register</a></li>
      </ul>
    </nav>

  )
}

export default Header
