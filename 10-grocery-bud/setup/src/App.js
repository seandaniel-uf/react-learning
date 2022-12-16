import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  // looking for the list in local storage
  let list = localStorage.getItem("list");

  if (list) {
    // converts string to object
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "Please enter an item", "danger");
    }
    // if we have a item for the list, and editing
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id == editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "Value changed", "success");
    } else {
      // show alert
      showAlert(true, "Item added", "success");
      // create new item
      const newItem = { id: new Date().getTime().toString(), title: name };
      // get previous items in state value and add new
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show, msg, type) => {
    // property name matches the value
    setAlert({
      show,
      msg,
      type,
    });
  };

  const clearList = () => {
    showAlert(true, "Items Deleted", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "Item deleted", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    // naming the key ('list') and value, has to be a string!
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
