function InputPage({inputValue, setInputValue, onClick, setCheckBtn, checkBtn}){
    
    return(
        <div>
            <input type="text" placeholder="Create Todo" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
                setCheckBtn(true)
            }}/>
            {checkBtn ? <button onClick={onClick}>Add</button> : <button disabled>Add</button>}
        </div>
    )
}

export default InputPage;