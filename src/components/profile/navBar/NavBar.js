import './navBar.scss';

const NavBar = () => {
    return(
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <a className='navigation__link'>Message</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'>Friends</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'>Groups</a>
                </li>
                <li className='navigation__item'>
                    <a className='navigation__link'>Photos</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;