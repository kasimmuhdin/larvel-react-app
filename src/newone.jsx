
 import { useState } from "react";
import './index.css';

export default function InventoryApp() {
  const [inventory, setInventory] = useState([]);
 const styless = {
      backgroundColor: "blueviolet",
      padding: "20px"
    }
    const buttons = {
      margin: "4px"
    }
  // ✅ Find product index (case-insensitive)
  function findProductIndex(productName) {
   
    return inventory.findIndex(
      (product) => product.name.toLowerCase() === productName.toLowerCase()
    );
  }

  // ✅ Add product
  function addProduct(product) {
    const index = findProductIndex(product.name);

    if (index !== -1) {
      const updatedInventory = [...inventory];
      updatedInventory[index].quantity += product.quantity;
      setInventory(updatedInventory);
      console.log(`${product.name} quantity updated`);
    } else {
      setInventory([
        ...inventory,
        { ...product, name: product.name.toLowerCase(), quantity: product.quantity },
      ]);
      console.log(`${product.name} added to inventory`);
    }
  }

  // ✅ Remove product
  function removeProduct(productName, quantity) {
    const index = findProductIndex(productName);

    if (index === -1) {
      console.log(`${productName} not found`);
      return;
    }

    const updatedInventory = [...inventory];
    const product = updatedInventory[index];

    if (product.quantity < quantity) {
      console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
    } else {
      product.quantity -= quantity;
      if (product.quantity === 0) {
        updatedInventory.splice(index, 1); // remove item
      }
      setInventory(updatedInventory);
      console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
    }
  }

  return (
    <div style={styless} className="newone">
      <div className="buttons" style={buttons}>
      <button onClick={() => addProduct({ name: "banana", quantity: 7 })}>
        Add 7 bananas
      </button>
      <button onClick={() => addProduct({ name: "apple", quantity: 7 })}>
        Add 7 apples
      </button><br />
      <button onClick={() => removeProduct("apple", 3)}>Remove 3 apples</button>
      <button onClick={() => removeProduct("banana", 3)}>Remove 3 bananas</button>
</div>
      <h3>Current Inventory:</h3>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} — {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
