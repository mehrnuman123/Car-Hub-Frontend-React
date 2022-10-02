import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> CRUD</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/admin/cars"><i className="fa fa-clipboard"></i>Cars</Link>
                            </li>


                            <li>
                                <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                            </li>

                            <li>
                                <Link to="/admin/car"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
