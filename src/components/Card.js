import React from "react";

const Card = () => {
    return(
        <div className="card">
                <div className="favorite">
                <img src="/img/unliked.svg" alt='unliked' />
                </div>
                <img width={133} height={112} src='/img/sneakers/1.jpg' alt='Sneakers_1' />
                <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>999$</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
                </div>
        </div>    
    )
}

export default Card;