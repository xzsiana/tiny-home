import {useState} from 'react';
import  {v4 as uuidv4} from "uuid";
import { Link } from "react-router-dom";
import styled from "styled-components";


const AddItems = ({dispatch, flag}) => {
    const [newItem, setNewItem] = useState({
        id: "",
        name: "",
        categories: "",
        color: "",
        image: "",
        price: ""
    });
    const onType = (e) => {
       const inputName= e.target.name;
       switch(inputName) {
        case "name":
            setNewItem({...newItem, name: e.target.value,});
            break;
        case "categories":
            setNewItem({...newItem, categories: e.target.value,});
            break;
        case "color":
            setNewItem({...newItem, color: e.target.value,});
            break;
        case "price":
            setNewItem({...newItem, price: e.target.value,});
            break;
        case "image":
            setNewItem({...newItem, image: e.target.value,});
            break;
        default:
            break;
       }
    }
    return(
        <Wrapper>
                <div className="newItemCont">
                <h2> ADD NEW ITEM </h2>
                <forms>
                    <input name="name" type="text" placeholder="Name of Furniture" onChange={onType}/>
                    <br/>
                    <input name="categories" type="text" placeholder='Sofa/Chairs/Tables/Beds/Cabinets' onChange={onType}/> 
                    <br/>
                    <input name="color" type="text" placeholder="White/Brown/Green/ " onChange={onType}/> 
                    <br/>
                    <input name="price" type="Number" placeholder="Price" onChange={onType}/> 
                    <br/>
                    <input name="image" type="text" placeholder="Image Url" onChange={onType}/> 
                    <br/>
                </forms>
                <Link to="/"><button className="BtnNewItem" onClick={()=> dispatch({type: 'SET_FLAG',payload: {flag: !flag} })}> CANCEL </button></Link>
                <Link to="/"><button className="BtnNewItem" onClick={()=> {dispatch({type: "ADD_ITEM", 
                payload: {id: uuidv4(), name:newItem.name, categories:newItem.categories, color:newItem.color, image:newItem.image, price:newItem.price}
                });  
                setNewItem({
                    id: "",
                    name: "",
                    categories: "",
                    color: "",
                    image: "",
                    price: 0
                })

                }}> ADD ITEM
                </button></Link>
                
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

export default AddItems;