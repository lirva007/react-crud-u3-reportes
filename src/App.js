import React, { useState } from "react";
import TableUsers from "./components/AppTable";
import AddUserForm from "./components/AppAddUserForm";
import EditUserForm from "./components/AppEditUserForm";
import { v4 as uudiv4 } from "uuid";

function App() {
  const userData = [
    {
      id: 1,
      name: "Magda",
      tel: "2381691709",
      note: "Jugar warzone",
      direction: "Avenida Abasolo",
    },
    {
      id: 2,
      name: "Omar",
      tel: "2382228978",
      note: "Ir al invernadero",
      direction: "Calle Zinacatepec",
    },
    {
      id: 3,
      name: "Alberto",
      tel: "2381237654",
      note: "Transmitir en vivo",
      direction: "Col del Sol",
    },
    {
      id: 4,
      name: "José",
      tel: "2386752309",
      note: "Programar un juego",
      direction: "Boulevar Viejo",
    },
    {
      id: 5,
      name: "Alex",
      tel: "2380985427",
      note: "Ver streaming",
      direction: "Avenida Gammer",
    },
  ];
  const [users, setUsers] = useState(userData);

  const addUser = (user) => {
    user.id = uudiv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id));
  };

  const [bandera, setBandera] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    tel: "",
    note: "",
    direction: "",
  });

  const editRow = (user) => {
    setBandera(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      tel: user.tel,
      note: user.note,
      direction: user.direction,
    });
  };

  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>Examen Unidad 2</h1>
      <div className="flex-row">
        <div className="flex-large">
          {bandera ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>ViewUsers</h2>
          <TableUsers users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;

