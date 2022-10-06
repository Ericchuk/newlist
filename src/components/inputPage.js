function InputPage({inputValue, setInputValue, onClick}){
    
    return(
        <div>
            <header>
                <h1></h1>
            </header>
            <input type="text" placeholder="Create Todo" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
                // setCheckBtn(true)
            }}/>
            {inputValue.length > 0 ? <button onClick={onClick}>Add</button> : <button disabled>Add</button>}
        </div>
    )
}

export default InputPage;