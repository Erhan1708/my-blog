import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductContext from './context/context';


function Main() {
   const [products, setProducts]= useState([])
  return (
     <React.StrictMode>
        <ProductContext.Provider value={{ products, setProducts }}>
           <App />
        </ProductContext.Provider>
  </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);