import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./packingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList(){
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )
    if(confirmed)
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onToggleItems={handleToggleItem}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}








