/*
  Imagine building a shopping cart component for an online store. The cart is crucial as it handles item
additions, removals, and total price calculations. As straightforward as it may seem, it embodies various
moving parts and logic interconnections. Without tests, you leave the door open for future problems,
such as incorrect pricing, items not being added or removed correctly, or even security vulnerabilities.
*/

import { useState } from "react";

type Item = {
  id: string;
  name: string;
  price: number;
};

function ShoppingCart() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemId: string) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      {/* Render items and controls for adding/removing */}
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default ShoppingCart;

/*
  Don't be lazy. Write tests!
*/
