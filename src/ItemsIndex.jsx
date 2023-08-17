export function ItemsIndex(props) {
  return (
    <div>
      <h1>All items</h1>
      {props.items.map((item) => (
        <div key={items.name}>
          <h2>{items.category}</h2>
          <p> Best By:{items.best_by} </p>
          <p>Lives At: {items.lives_at}</p>
          <button onClick={() => props.onShowItem(item)}>More info</button>
        </div>
      ))}
    </div>
  );
}
