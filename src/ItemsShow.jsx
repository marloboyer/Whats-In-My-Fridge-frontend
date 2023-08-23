export function ItemsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateItem(props.item.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyItem(props.item);
  };
  return (
    <div>
      <h1>Item information</h1>
      <p>Name: {props.item.name}</p>
      <p>Category: {props.item.category}</p>
      <p>Best By: {props.item.best_by}</p>
      <p>Lives At: {props.item.lives_at}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.item.name} name="name" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.item.category} name="category" type="text" />
        </div>
        <div>
          Best By: <input defaultValue={props.item.best_by} name="best_by" type="text" />
        </div>
        <div>
          Lives At: <input defaultValue={props.item.lives_at} name="lives_at" type="text" />
        </div>
        <button type="submit">Update item</button>
      </form>
      <button onClick={handleClick}>Destroy item</button>
    </div>
  );
}
