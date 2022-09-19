const Header = () => {
    return(
        <header className="d-flex justify-between p-40">
            <div className="d-flex">
                <img width={40} height={40} src="./img/logo.png" alt='Logo' />
                <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='d-flex align-center'>
                <li className="mr-30">
                <img src="/img/cart.svg" alt='cart' />
                <span>1205 руб.</span>
                </li>
                <li>
                <img src="/img/user.svg" alt='user' />
                </li>
            </ul>
        </header>
    )
}

export default Header;