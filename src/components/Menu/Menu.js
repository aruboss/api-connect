import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Dản Phẩm',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
            var active = match ? 'active' : '';
        }
        }
    />
);

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Trang Chủ</a>
                    </li>
                    <li>
                        <a>Quản Lý Sản Phẩm</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
