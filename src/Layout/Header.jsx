import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {cart_items} = useSelector(store=>store.cartStore)
    const length = cart_items.length

    return (
        <>
            <div className='container-fluid bg-dark fs-4'>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white position-relative" href="/cart">Cart
                        {
                            length > 0 && <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
                                {length}
                            </span>
                        }
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header