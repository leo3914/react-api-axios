import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});

  const toggleCreateDrawer = () => {
    setCreateDrawer(!createDrawer);
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => {
        if (user.id === newUser.id) {
          return newUser;
        }
        return user;
      })
    );
  };

  const toggleEditDrawer = () => {
    setEditDrawer(!editDrawer);
  };

  return (
    <DataContext.Provider
      value={{
        toggleCreateDrawer,
        toggleEditDrawer,
        createDrawer,
        users,
        setUsers,
        addUser,
        deleteUser,
        updateUser,
        editDrawer,
        setEditDrawer,
        editUser,
        setEditUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
