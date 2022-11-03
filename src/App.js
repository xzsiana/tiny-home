import './App.css';
import  {v4 as uuidv4} from "uuid";
import DisplayedItems from './components/DisplayedItems';
import { useReducer, } from 'react';
import AddItems from './components/AddItems';
import EditItem from './components/EditItem';
import Cart from './components/Cart';
import { Routes, Route } from "react-router";
// import { Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
// import CartPage from './components/CartPage';
import AboutPage from './components/AboutPage';


const App =() => {
  const initialState ={
    items: [
      {
        id: uuidv4(),
        name: "Suede Sofa",
        categories: "Sofa",
        color: "Green",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1",
        price: 400,
      },
      {
        id: uuidv4(),
        name: "Wooden Armchair",
        categories: "Chairs",
        color: "White",
        image: "https://images.unsplash.com/photo-1609510368600-883b7f16d121?ixlib=rb-1.2.1",
        price: 650,
      },
      {
        id: uuidv4(),
        name: "Dining Table",
        categories: "Tables",
        color: "White",
        image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1",
        price: 450,
      },
      {
        id: uuidv4(),
        name: "Wooden Pallet Bed Frame",
        categories: "Beds",
        color: "Brown",
        image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1",
        price: 350,
      },
      {
        id: uuidv4(),
        name: "Scandinavian Cabinet",
        categories: "Cabinets",
        color: "white",
        image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-1.2.1",
        price: 350,
      },
    ],
    editFlag: false,
    flag : false,
    filteredCategories : "All Products",
    cart: [],
    editData : {
      id: "",
      name: "",
      categories: "",
      color: "",
      image: "",
      price: ""
    },
    totalAmount:0,
    }

 const reducer = (state, action) => {
    switch (action.type) {
    case `DELETE` :
      return {...state, items: state.items.filter((item) => item.id !== action.payload.id) };
    case `ADD_CART`  : 
        const filtered = state.cart.filter((item)=> item.id === action.payload.id)
        if(filtered.length > 0){
            const updatedCart = state.cart.map((item) => {
              if(item.id === action.payload.id) {
                return {...item, qty: item.qty+1}
              } return item;
            })
              return {...state, cart: updatedCart }
        }else{
          const targetItem = state.items.filter((item)=> item.id === action.payload.id)
          const newItem = {...targetItem[0], qty: 1}
          return {...state, cart: [...state.cart, newItem]}
        }
    case 'ADD_ITEM':
      const checkId= state.items.filter((item)=> item.name.trim().toLowerCase() === action.payload.name.trim().toLowerCase()) 
      if(checkId.length>0) {
        alert(`Furniture name already registered`)
        return state
      }else{
        return {...state, items: [action.payload,...state.items]}
      }
    case `EDIT` :
      return {...state, editFlag: true, editData: action.payload}
    case `UPDATE`:
      const updatedItem = state.items.map((item) => {
        if(item.id === action.payload.id) {
          return action.payload
        }return item
      })
      const updatedCart = state.cart.map((item) => {
        if(item.id === action.payload.id) {
          return {...item,...action.payload}
        }return item
      })
      return {...state, editFlag:false, items: updatedItem, cart: updatedCart}
    case "INCREMENT_QTY":
      const checkCartIdInc = state.cart.filter((item)=> item.id === action.payload.id) 
      if(checkCartIdInc.length > 0){
        const updatedCartQty = state.cart.map((item) => {
          if(item.id === action.payload.id) {
            return {...item, qty: item.qty+1}
          } return item;
        })
        return {...state, cart: updatedCartQty}
      }
      break;
    case "DECREMENT_QTY":
      const checkCartIdDec = state.cart.filter((item)=> item.id === action.payload.id) 
      let deleteFlag = false
      const cartCheck = checkCartIdDec[0]
      if(checkCartIdDec.length > 0){
        let updatedCartQty = state.cart.map((item) => {
          if(item.id === action.payload.id) {
            if(item.qty - 1 > 0){
              return {...item, qty: item.qty-1}
            }
            deleteFlag = true
          } 
          return item;
        })
        if(deleteFlag === true) {
          updatedCartQty = updatedCartQty.filter((item) => item.id !== action.payload.id)
        }
        return {...state, cart: updatedCartQty }
      }
      break;
    case "DELETE_CART":
      return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
    case "SET_FILTERED_CATEGORIES":
      return {...state, filteredCategories:action.payload.categories}
    case "SET_FLAG":
      return {...state, flag:action.payload.flag}
    case "SET_EDIT_FLAG":
      return {...state,editFlag:action.payload.flag}
    default:
      break;
    }
 }

const [state, dispatch] = useReducer(reducer, initialState);


const handleFilteredCategories =(varies) => {
     dispatch({type: "SET_FILTERED_CATEGORIES", payload: {categories: varies}})
 }
 
 const newCategories = () => {
   const newCategory = ["All Products"]
   state.items.map((item) => {
     if(newCategory.indexOf(item.categories) < 0) {
      newCategory.push(item.categories);
     }
     return item;
   })
   return newCategory;
 }
 const newCategory = newCategories(); 

 const getIdInfo = (id) => {
  const itemId= state.items.filter((item) => item.id === id)
  dispatch({type: "EDIT", payload: itemId[0]})
}

 const getCartTotal = () => {
    let cartTotal = 0;
    state.cart.map((item) => {cartTotal += ( item.price * item.qty)})
    return cartTotal  
 }

 const total = getCartTotal()

  return(
    <div className="App">
      <NavBar/>    
        <div>
          <div className='filter'>
            {!state.flag ?  <select value={state.filteredCategories} onChange={(e)=> handleFilteredCategories(e.target.value)}> 
              {newCategory.map((varie)=> (
                <option value = {varie}> {varie} </option> 
              ))}
            </select>:<p></p> }
          </div>
        
    <div className ="DisplayItems">
      <Routes>
        <Route path="/" element = {<WelcomePage/>}/>
        <Route path="/Products" element= {state.items.map((product) => 
            ( state.filteredCategories === `All Products`||
            state.filteredCategories === product.categories)&& (
              <DisplayedItems 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                color={product.color}
                dispatch={dispatch}
                getIdInfo= {getIdInfo}
                flag ={state.flag}
            />) 
            )}/>
        <Route path="About" element = {<AboutPage/>}/>    
        <Route path="AddCart" element = {<AddItems dispatch={dispatch} />}/>
        <Route path="Products/EditItem" element = {<EditItem dispatch={dispatch} state={state} editData = {state.editData}/>}/>    
        {/* <Route path="Cart" element = {<CartPage/>}/>  */}
        <Route path="*" element = {<ErrorPage/>}/> 

      </Routes>
    </div>
  </div>
 
      <div className='cartCont'>
        {total === 0 ? <p> </p>:<div id="totalCont">
          <p id="amount"> {`TOTAL AMOUNT: ${total}`}</p>
        </div>}
        <div className="DisplayItemsCart">
        {state.cart.map((newCart,index) => (
          <Cart
          key={newCart.index}
          id={newCart.id}
          name={newCart.name}
          price={newCart.price}
          image={newCart.image}
          categories={newCart.categories}
          color={newCart.color}
          dispatch ={dispatch} 
          stateCart = {state.cart}
          
          />
        )
        )}
        </div>


        
      </div>
    </div>
  );
}

export default App;
// cartCheck