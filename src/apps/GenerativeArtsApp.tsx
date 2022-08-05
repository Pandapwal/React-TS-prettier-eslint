import { Outlet, NavLink } from 'react-router-dom'
import { useAppSelector } from '../hooks'

import './generative-arts-app.css'

function GenerativeArtsApp() {
    const theme = useAppSelector((state) => state.theme.value)

    return (
        <div className='mvh-100'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <NavLink className='navbar-brand' to='/'>
                        Generative Arts
                    </NavLink>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' aria-current='page' to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/items'>
                                    Items
                                </NavLink>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <input
                                className='form-control me-2'
                                type='search'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <button className='btn btn-outline-success' type='submit'>
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-center align-items-center pb-5'>
                <Outlet />
            </div>
            <footer className='d-flex justify-content-center align-items-center w-100 p-3 position-absolute bottom-0'>
                &copy; Pandapwal -<span className='mx-1 fst-italic text-muted'>theme {theme}</span>
            </footer>
        </div>
    )
}

export default GenerativeArtsApp
