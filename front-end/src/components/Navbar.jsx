import { Button, Avatar } from 'antd'
import { FundProjectionScreenOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import './Navbar.css'
import ProfileMenu from './ProfileMenu'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar_buttons'>
                    <div className='profile'>
                        <ProfileMenu />
                    </div>
                </div>

                <div className='logo flex'>
                    <div className='tv'>
                        <Button
                            type='primary'
                            icon={<FundProjectionScreenOutlined />}></Button>
                    </div>
                    <h1>React movie app</h1>
                </div>
            </nav>

            <section className='entry'>
                <h1>
                    Извините, но для вас у нас ничего нет <span>только</span>
                </h1>
                <h3>
                    Известные фильмы, эксклюзивные премьеры и культовые
                    киновселенные
                </h3>
                <button>Выбрать, что посмотреть</button>
            </section>
        </>
    )
}

export default Navbar
