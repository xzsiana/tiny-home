// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";


// const CartPage = () => {
//   return (
//     <Wrapper className="page-100">
//       <section>
//         <div className='cartCont'>
//             {total === 0 ? <p> </p>:<div id="totalCont">
//             <p id="amount"> {`TOTAL AMOUNT: ${total}`}</p>
//         </div>}
//         <div className="DisplayItemsCart">
//             {state.cart.map((newCart,index) => (
//                 <Cart
//                     key={newCart.index}
//                     id={newCart.id}
//                     name={newCart.name}
//                     price={newCart.price}
//                     image={newCart.image}
//                     categories={newCart.categories}
//                     color={newCart.color}
//                     dispatch ={dispatch} 
//                     stateCart = {state.cart}
//                 />
//         )
//         )}
//         </div>
//         <Link to="/Products" className="btn">
//           Shop More
//         </Link>
//       </div></section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.main`
//   background: var(--clr-primary-10);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   h1 {
//     font-size: 10rem;
//   }
//   h3 {
//     text-transform: none;
//     margin-bottom: 2rem;
//   }
// `;



// export default CartPage;