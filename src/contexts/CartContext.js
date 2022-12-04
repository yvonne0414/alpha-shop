import React, { useState } from "react";

export const CartContext = React.createContext();

const productData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];


export function ContextProvider({ children }) {
  const [cartPrdList, setcartPrdList] = useState(productData);
  const [formData, setFormData] = useState({
    totalPrice: "400",
    visaName: "",
    visaNumber: "",
    visaEXP: "",
    visaCVC: "",
  });

  function handleFormSubmit(event) {
    if (formData.visaName === "" || formData.visaNumber === "" || formData.visaEXP === "" || formData.visaCVC === ""){
      alert("請填寫付款資訊")
      return
    }
    console.log(formData)
    alert("下單成功") 
  }

  function handleFormChange(event) {
    const { name, value } = event.target;  

    setFormData((prevFormData) => {
        return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleChange(name, value) {
    setFormData((prevFormData) => {
        return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


  return (
    <CartContext.Provider
      value={{
        cartPrdList,
        setcartPrdList,
        formData,
        setFormData,
        handleFormSubmit,
        handleFormChange,
        handleChange
      }}
    >
      {children}
    </CartContext.Provider>
  );
}