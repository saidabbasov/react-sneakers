const Drawer = () => {
    return(
    <div style={{display: 'none'}}  className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn" src="/img/btn-remove.svg" alt='remove' /></h2>
      <div className="items">
      <div className="cartItem d-flex align-center mb-20">
            <img
            className="mr-20" 
            width={70} 
            height={70} 
            src="/img/sneakers/1.jpg" 
            alt='sneakers' />
          <div className="mr-20">
            <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
            <b>999$</b>
          </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt='remove' />
        </div>
        <div className="cartItem d-flex align-center">
            <img
            className="mr-20" 
            width={70} 
            height={70} 
            src="/img/sneakers/1.jpg" 
            alt='sneakers' />
          <div className="mr-20">
            <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
            <b>999$</b>
          </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt='remove' />
        </div>
        <div className="cartTotalBlock mt-40">
        <ul>
          <li >
            <span>Итого:</span>
            <div></div>
            <b>999$</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>200$</b>
          </li>
        </ul>
        <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
        </div>
      
      </div>
     </div>
    </div>
    )
}

export default Drawer;