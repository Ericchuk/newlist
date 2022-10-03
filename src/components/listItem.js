import pen from "./images/pen.png";
import bin from "./images/bin.png";

function ListItem({ list, setList, onClick, handleChangeClick }) {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <p>{item}</p>
            <span>
              <img src={pen} alt="pen" onClick={handleChangeClick}/>
              <img src={bin} alt="bin" onClick={onClick}/>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ListItem;
