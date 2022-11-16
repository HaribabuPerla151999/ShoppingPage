import React from "react";
import { useState, useEffect } from "react";

function ShoppingApp() {
  const [catagories, setCatagories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemCount] = useState(0);

  function getLength() {
    setItemCount(cartItems.length);
  }
  function handleRemoveAll(){
    
     
    

  }
  function LoadCatagories() {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        data.unshift("all");
        setCatagories(data);
      });
  }
  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }

  useEffect(() => {
    LoadCatagories();
    LoadProducts(`https://fakestoreapi.com/products`);
  }, [cartItems.length]);
  function handleCatagory(e) {
    // alert(e.target.value)
    if (e.target.value === "all") {
      LoadProducts(`https://fakestoreapi.com/products`);
    } else {
      LoadProducts(
        `https://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }
  function handleAddtoCart(e) {
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => {
        // setCartItems(data);
        // // console.log(data);
        cartItems.push(data);
        getLength();
        // handleRemoveAll()
      });
  }

  function handleDeleteRecord(e) {
    // console.log(e);
    // alert(e.target.id);
    //  cartItems.findIndex((value,index)=>
    //     alert(JSON.parse(value)
        
    //  )
    // let findValue=cartItems.findIndex((value,index)=>{
    //   e.target.id===cartItems.id? alert(index):alert("Hari")
    // })
    // alert(findValue);
    
  }
  
  console.log("products======>", products);
  return (
    <div>
      <div className="container-fluid bg-dark w-100" style={{ padding: "0" }}>
        <header className="bg-warning text-white text-center p-3">
          <h1 className="text-dark">
            <span className="bi bi-cart"></span>$ Hari Shopping Mart $
          </h1>
        </header>
        <section className="row">
          <nav className="col-2 mt-2">
            <div>
              <label className="text-white">Select Category</label>
              <div>
                <select onChange={handleCatagory} className="form-select">
                  {catagories.map((category) => (
                    <option value={category} key={category}>
                      {category.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </nav>
          <main
            className="col-7 d-flex flex-wrap  mt-2 overflow-auto"
            style={{ height: "600px" }}
          >
            {products.map((product) => (
              <div className="card bg-warning border border-3 border-primary rounded-3  m-2 p-2 w-25">
                <div className="card-head">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    height="150"
                  />
                </div>
                <div className="card-body bg-warning text-dark">
                  <div>
                    <p>{product.title}</p>
                  </div>
                  <div>
                    <dl>
                      <dt>Price:</dt>
                      <dd>{product.price}</dd>
                      <dt>Rating</dt>
                      <dd>
                        <span className="bi bi-star-fill text-success"></span>
                        {product.rating.rate}{" "}
                        <span>[{product.rating.count}]</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="card-footer bg-warning text-center">
                  <button
                    id={product.id}
                    onClick={handleAddtoCart}
                    className="btn btn-success text-white"
                  >
                    <span className="bi bi-cart4"></span>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </main>
          <aside className="col-3 mt-3">
            <div className="d-flex flex-row">
              <div>
            <button className=" btn btn-success text-white">
              <span className="bi bi-cart3"></span>[{itemsCount}]Your Cart Items
            </button>
            </div>
            <div>
              <button className="btn btn-warning" onClick={handleRemoveAll}>
                <span className="bi bi-x-circle-fill"></span>
              </button>
            </div>
            </div>
            <table className="table  text-white">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.image} height="50" width="50" />
                    </td>
                    <td>
                      <button
                        id={item.id}
                        onClick={handleDeleteRecord}
                        className="btn btn-warning"
                      >
                        <span className="bi bi-trash"></span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-white">Total Amount:{
                   
                  cartItems.map((item)=>
                     parseInt(item.price++)
                     
                  )
                 }           
            </p>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default ShoppingApp;
