import { Link } from "react-router-dom";
import {RiDeleteBin6Line,RiShoppingCart2Line,RiEditLine} from 'react-icons/ri'
import styled from "styled-components";



const DisplayedItems = ({flag,getIdInfo,name, price, image,id, categories, color, dispatch}) => {
  console.log(flag)
    return( 
        <Wrapper>
            <div className="container"> 
                <div className='PerItems'>
                    <div className='itemName'>
                        <img className ="Items" src ={image} alt ="coffee"/>
                        <p > {`${name.toUpperCase()}`}</p>
                    </div>
                    <div className="bb">
                        <Link to="EditItem"> <button onClick={() => {getIdInfo(id)}}> <RiEditLine/> </button></Link>
                        <button onClick={()=> {dispatch({type: 'ADD_CART',payload: {id: id} })
                                                            dispatch({type: 'SET_FLAG',payload: {flag: !flag} })
                        }}> <RiShoppingCart2Line/> </button>
                    </div>
                    <div className="d">
                            <button className="DeLBtn" onClick={()=> {
                                dispatch({type: 'DELETE', payload: {id: id} }) 
                                dispatch({type: 'DELETE_CART', payload: {id: id} })
                                }}>
                                <RiDeleteBin6Line/>
                            </button>
                        </div>
                    <div className="ItemDetails">
                        <p className="productCategory">{categories}</p>
                        <p>{`${color}`}</p>
                        <p> {`PHP ${price}`}</p> 
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flexbox;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 22rem;
    height: 16rem;
   }
`;
export default DisplayedItems;