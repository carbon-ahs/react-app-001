import ListGroup from "react-bootstrap/ListGroup";
import { MouseEvent } from "react";

function DefaultExample() {
  const items = ["dhaka", "chittagong", "khulna", "rajshahi"];
  let selectedIndex: number = -1;
  const handleClick = (event: MouseEvent) => {
    selectedIndex = items.indexOf(event.currentTarget.textContent || "");
    console.log(selectedIndex);
  };
  return (
    <>
      <h2>Divisions</h2>
      <br></br>

      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item
            key={index}
            active={index === selectedIndex}
            onClick={handleClick}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default DefaultExample;
