export function ItemsIndex(props) {
  return (
    <div>
      <h1>All items</h1>
      {props.items.map((item) => (
        <div key={item.name}>
          <h2>{item.category}</h2>
          <p> Best By:{item.best_by} </p>
          <p>Lives At: {item.lives_at}</p>
          <button onClick={() => props.onShowItem(item)}>More info</button>
        </div>
      ))}
    </div>
  );
}
