import {TiCancelOutline} from 'react-icons/ti'
import styled from "styled-components";


const Cart = ({stateCart,dispatch, name, price, image,id, categories, color})=> {
   
    const data = stateCart.filter((item) => item.id === id)
    const qty = data[0].qty
   
    return( 
    <Wrapper>
        <div className="PerItemsCart">
            <div className="cartDetails">
                <div className="a">
                    <img className ="Items" src ={image} alt ="coffee"/><br/>
                    <button className="btn" onClick={() => dispatch({ type: "DECREMENT_QTY", payload:{id: id} })}>-</button>
                    <input type="text" placeholder="qty " value={qty} disabled="true" />
                    <button className="btn" onClick={() => dispatch({ type: "INCREMENT_QTY", payload:{id: id} })}>+</button>
                    <p>{`SUBTOTAL: ${price * qty}`} </p>
                </div>
                <div className="b">
                    <p> {`${categories} Coffee`}</p>
                    <p>{`${color}`}</p> 
                    <p> {`PHP ${price}`}</p> 
                    <button className="cartCancel"onClick={()=> dispatch({type: 'DELETE_CART', payload: {id: id} })}><TiCancelOutline size={35}/></button>
                </div>
            </div>
        </div>
    </Wrapper>
);
}
const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 22rem;
    height: 16rem;
   }
`;
export default Cart;