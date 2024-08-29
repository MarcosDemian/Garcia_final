export const fetchProductos = async() => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    return(data);
  } catch (e) {
    console.error("Error fetch data", e);
    throw e;
  }
};

export const fetchProductosById = async(id) => {
  try{
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json();
      return(data);
  } catch(e){
      console.error("Error fetch data", e);
      throw e;
  }

};
