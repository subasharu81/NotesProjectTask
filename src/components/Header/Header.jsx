
import { Link } from 'react-router-dom'
import style from './header.module.css'

function Header(){

    return <div className={`${style.header} fluid-container`}>
        <div className= {`${style.container}`}>
            <div className= {`${style.logoText} m-4`}>
                 <h3>Keep notes</h3>
            </div>
            <div className= {`${style.menus} m-4`}>
                <ul>
                    <li><Link to='/home'>About</Link></li>
                    <li> <Link to='/notes'>Notes</Link></li>
                    <li> <Link to='/register'>Account</Link></li>
                    <li> <Link to='/signIn'>Login</Link></li>
                </ul>
            </div>
        </div>
        
    </div>
}

export default Header