function InputPage({ inputValue, setInputValue, onClick }) {
  return (
    <aside>
      <header>
        <h1>TODO</h1>
        <div>
          <p>Help keep track of task</p>
          <p>What do you want to do?</p>
        </div>
      </header>
      <div>
        <input
          type="text"
          placeholder="I want to "
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            // setCheckBtn(true)
          }}
        />
        {inputValue.length > 0 ? (
          <button onClick={onClick}>Add</button>
        ) : (
          <button disabled>Add</button>
        )}
      </div>
    </aside>
  );
}

export default InputPage;
