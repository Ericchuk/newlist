import { useState } from "react";
import InputPage from "./inputPage";
import ListItem from "./listItem";

function LandingPage(){
    const [inputValue, setInputValue] = useState("")
    const [list, setList] = useState([]);
    const [checkBtn, setCheckBtn] = useState(false);

    function handleAdd(){
        setList((prev) => [...prev, inputValue])
        setInputValue("")
        setCheckBtn(false)git 
    }

    // delete item from list 
    function handleDelete(){
        setList((prev) => prev.filter((item, index) => index !== index))
    }

    // edit item in list 
    function handleChange(nextList){
        console.log("33333333")
    }

    return(
        <section>
            <InputPage inputValue={inputValue} setInputValue={setInputValue} onClick={handleAdd} checkBtn={checkBtn} setCheckBtn={setCheckBtn}/>
            <ListItem list={list} setList={setList} onClick={handleDelete} handleChangeClick={handleChange}/>
        </section>
    )

}

export default LandingPage;