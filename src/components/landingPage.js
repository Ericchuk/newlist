import { useState } from "react";
import InputPage from "./inputPage";
import ListItem from "./listItem";
import pen from "./images/pen.png";
import bin from "./images/bin.png";

let id = 3;

function LandingPage() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [checkBtn, setCheckBtn] = useState(false);

  function handleAdd() {
    setList((prev) => [...prev, { id: id++, title: inputValue, pen: pen, bin: bin }]);
    setInputValue("");
    setCheckBtn(false);
  }

  

  // delete item from list
  function handleDelete(id) {
    // console.log("delete", id)
    setList(list.filter((task) =>
      task.id !== id
    ))
  }


  // edit item in list
  function handleChange(nextList) {
    console.log("33333333");
  }

  return (
    <section>
      <InputPage
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClick={handleAdd}
        checkBtn={checkBtn}
        setCheckBtn={setCheckBtn}
      />
      <ListItem
        list={list}
        setList={setList}
        onDelete={handleDelete}
        handleChangeClick={handleChange}
      />
    </section>
  );
}

export default LandingPage;
