import {useState} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const EditItem =({dispatch, editData}) => {
   
    const [itemData, setEditData] = useState({
        id: editData.id,
        name: editData.name,
        categories: editData.categories,
        color: editData.color,
        image: editData.image,
        price: editData.price
    })
const onType=(e)=> {
    const EditData = e.target.name;
    
    switch (EditData) {
        case "name":
            setEditData({
                ...itemData, name: e.target.value
            });
            break;
        case "categories":
            setEditData({
                ...itemData, categories: e.target.value
            });
            break;    
         case "color":
            setEditData({
                ...itemData, color: e.target.value
            });
            break;
        case "image":
            setEditData({
                ...itemData, image: e.target.value
            });
            break;
        case "price":
            setEditData({
                ...itemData, price: e.target.value
            });
            break;  
    }
}


const  handleCancel = () => {
}
return(
    <Wrapper>
            <div> <h2> Edit </h2> 
            <forms>
                    <label> Name </label>
                    <input name="name" type="text" value={itemData.name}  onChange={onType}/>
                    <br/>
                    <label> Categories </label>
                    <input name="categories" type="text" value={itemData.categories}  onChange={onType}/> 
                    <br/>
                    <label> Color </label>
                    <input name="color" type="text" value={itemData.color}  onChange={onType}/> 
                    <br/>                
                    <label> Price </label>
                    <input name="price" type="number" value={itemData.price} onChange={onType}/> 
                    <br/>
                    <label> Image </label>
                    <input name="image" type="text" value={itemData.image} onChange={onType}/> 
                    <br/>
            </forms>
            <Link to="/" ><button onClick={()=> dispatch({type: 'SET_EDIT_FLAG',payload: {editFlag: true } })}> cancel </button></Link>
            
            <Link to="/"><button onClick={()=> {dispatch({type: 'UPDATE',payload:
            {id: itemData.id, name:itemData.name, categories: itemData.categories,color:itemData.color, 
                price:itemData.price, image:itemData.image }}
            );
            setEditData({
                id: "",
                name: "",
                categories: "",
                color: "",
                image: "",
                price: ''
            })
            }}> update </button></Link>
            
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
export default EditItem;
