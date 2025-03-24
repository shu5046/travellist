export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const x = Math.round((packedItems / totalItems) * 100);
    return (
      <footer className="stats">
        <em>
          {x === 100
            ? "You got everything! Ready to go ✈"
            : ` You have ${totalItems} items on your list, and you already packed
          ${packedItems} (${x}%)`}
        </em>
      </footer>
    );
  }