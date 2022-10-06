import { useState } from "react";
import InputPage from "./inputPage";
import ListItem from "./listItem";

let nextId = 3;

function LandingPage() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([
    {id: 0, title: "Learn React", isCompleted: false},
    {id: 1, title: "Learn Context API", isCompleted: false},
    {id: 2, title: "Learn Hooks", isCompleted: false},
    {id: 3, title: "Learn Redux", isCompleted: false},
  ]);

  function handleAdd() {
    setList((prev) => [{id : nextId++, title: inputValue, isCompleted: false}, ...prev ]);
    setInputValue("");
  }

  function handleCompleted(id){
    setList((prev) => prev.map((item) => {
      if(item.id === id){
        return {...item, isCompleted: !item.isCompleted}
        
      }
      return item
    }))
    // console.log("jjj", id)
  }

  // delete item from list
//   use the id as a contact point assign an id to each item in the list and filter it, the filter hides the false items and keeps the true. also ensure that the onclick function in listItem receives a function as it value . the function should be an arrow function that calls the onDelete function and passes the id as an argument

  const deleteTask = (id) => {
    setList(list.filter((task) =>
      task.id !== id
    ))
    // console.log("delete", id);
  }

  // edit item in list
  function handleChange(id) {
    setList((prev) => prev.map((item) => {
      if(item.id === id)
      { 
        setInputValue(item.title) // set the input value upon clicking to the value of the item called
        return { ...item, title: inputValue} 
        // return the old items in the list and change the title to the present input value
        // this would only cause a creation of a new item but it has been updated but you would need to delete the old item 
      }
      return item
    }))
  }


  return (
    <section>
      <InputPage
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClick={handleAdd}
      />
      <ListItem
        list={list}
        setList={setList}
        onDelete={deleteTask}
        handleChangeClick={handleChange}
        handleCompleted={handleCompleted}
      />
    </section>
  );
}

export default LandingPage;
