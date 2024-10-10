import './Shop.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Shop(){
    function Item(props){
        return (<div key={props.id} onClick={()=>props.callback(props)}>
            <img src={props.img} width={200} height={200}/><br/>
            id: {props.id} <br/>
            name: {props.name}<br/>
            price: {props.price}<br/>
        </div>);
    }
    const [products,setProducts] = useState([]);
    const URL = "https://glowing-journey-5ggv749r5wq5hpx49-5000.app.github.dev";
    useEffect(() => {
        axios.get(URL+'/api/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error =>{
            console.log("error");
        });
    },[])
    const [cart,setCart]=useState([]);

    function addCart(item){
        setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}]);
    }
    function resetCart(){
        setCart([]);
    }
  
    const productList=products.map(item=><Item {...item} callback={addCart}/>);
    const cartList = cart.map((item, index) => (
        <li key={item.id}>
          {item.id} {item.name} {item.price} B.
          <button onClick={() => {
            alert("you clicked " + index);
            setCart(cart.filter((_, _index) => index !== _index));
          }}>Remove</button>
        </li>
    ));
      
      
    let total = 0;
    for(let i=0 ; i<cart.length;i++) total+=cart[i].price;

    return ( 
        <>
            <div className='grid-container'>{productList}</div>
            <h1>Cart</h1>
            <button onClick={()=>resetCart()}>Clear</button>
            <ol>{cartList}</ol>
            <h3>Total : {total} B.</h3>
        </>
    );
}