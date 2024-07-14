import React, { useContext, useEffect, useState } from "react";
import EmptyRow from "./EmptyRow";
import { DataContext } from "../contexts/DataContext";
import Row from "./Row";
import LoaderRow from "./LoaderRow";

const RowGroup = () => {
  const [ready, setReady] = useState(false);
  const { users, setUsers } = useContext(DataContext);
  const loaderRowCount = Array.from({ length: 5 }, (_, index) => index);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:5173/api/users");
      const json = await res.json();
      setUsers(json);
      setReady(true);
    };
    fetchUsers();
  }, []);
  return (
    <>
      {!ready && loaderRowCount.map((el, index) => <LoaderRow key={index} />)}
      {ready &&
        (users.length ? (
          users.map((user) => <Row key={user.id} user={user} />)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;
