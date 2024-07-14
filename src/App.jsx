import React, { useContext } from "react";
import Container from "./components/Container";
import UsersTable from "./components/UsersTable";
import Header from "./components/Header";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";
import { DataContext } from "./contexts/DataContext";
import axios from "axios";

const App = () => {
  const { editDrawer } = useContext(DataContext);
  return (
    <Container>
      <Header />
      <UsersTable />
      <CreateDrawer />
      {editDrawer && <EditDrawer />}
    </Container>
  );
};

export default App;
