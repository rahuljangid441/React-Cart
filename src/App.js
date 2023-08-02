import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar"

//for componenetDIDmount
import { firestore } from "./firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state={
        products:[
            {
               price: 9990,
               title: 'Watch',
               qty: 3,
               img: 'https://th.bing.com/th/id/OIP.9BxN5bzBYzjbzwRiHAMFLAHaHa?pid=ImgDet&rs=1',
               id:1
           },
           {
               price: 8890,
               title: 'Mobile Phone',
               qty: 2,
               img: 'https://th.bing.com/th/id/OIP.Gehm65rLJMTH1St5LR7vzwHaEk?pid=ImgDet&rs=1',
               id:2
           },
           {
               price: 7960,
               title: 'Laptop',
               qty: 5,
               img: 'https://4.bp.blogspot.com/-m1C8H6XxqrY/VUSnASK-vsI/AAAAAAAAByI/4j68tlq5gzY/s1600/maxresdefault%2B(1).jpg',
               id:3
           }

       ]
    }
 
  
}
handleIncreaseQuantity=(product)=>{
    console.log("qty is increased",product);
    const { products } =this.state;
    const index=products.indexOf(product);

    products[index].qty+=1;
    this.setState({
        products:products
    })
}

handleDecreaseQunatity=(product)=>{
    const { products }=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    })
}
handleDelete=(id)=>{
    const { products }=this.state;
    const items=products.filter((item)=> item.id!==id);

    this.setState({
        products:items
    })

}
getCartCount=()=>{
  const { products }=this.state;
  let count=0;
  products.forEach((product) => {
    count+=product.qty
  });
  return count;
}

getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    if(product.qty>0){
    cartTotal=cartTotal+product.qty*product.price;
    }
    return '';
  });
  return cartTotal;
}
  render() {
    const { products }=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
                onIncreaseQty={this.handleIncreaseQuantity} 
                onDecreaseQty={this.handleDecreaseQunatity} 
                onDelete={this.handleDelete}  
        />
        <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
