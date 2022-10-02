import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../actions/userActions'
import { Button, Dropdown } from 'react-bootstrap'
import Search from './Search'

import '../../App.css'

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user,isAuthenticated, loading } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/car-logo.png"  height={100} width={150}/>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    {user ? (
                                <>
                                 <Dropdown>
                                 <figure className="avatar avatar-nav">
                                        <img
                                            src={"./images/avatar.jpg"}
                                            className="rounded-circle"
                                        />
                                    </figure>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                  {user && user.name}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"> 
                                        {user && user.role === 'admin' && (
                                            <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                        )}
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <Link className="dropdown-item" to="/me">Profile</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}> Logout </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>

                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
