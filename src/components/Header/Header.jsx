
import style from './header.module.css'

function Header(){

    return <div className={`${style.header} fluid-container`}>
        <div className= {`${style.container}`}>
            <div className= {`${style.logoText} m-4`}>
                 <h3>Keep notes</h3>
            </div>
            <div className= {`${style.menus} m-4`}>
                <ul>
                    <li>About</li>
                    <li>Notes</li>
                    <li>Account</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header