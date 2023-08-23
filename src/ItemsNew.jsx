export function ItemsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.CreateItem(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Category: <input name="category" type="text" />
        </div>
        <div>
          Best By: <input name="date" type="text" />
        </div>
        <div>
          Lives At: <input name="name" type="text" />
        </div>
        <button type="submit">Create item</button>
      </form>
    </div>
  );
}
