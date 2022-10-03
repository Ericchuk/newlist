import pen from "./images/pen.png";
import bin from "./images/bin.png";


function ListItem({ list, setList, onDelete, handleChangeClick }) {

  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.title}</p>
            <span>
              <img src={pen} alt="pen" onClick={handleChangeClick}/>
              <img src={bin} alt="bin" onClick={onDelete} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ListItem;
