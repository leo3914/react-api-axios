import React from "react";
import RowDeleteBtn from "./RowDeleteBtn";
import RowEditBtn from "./RowEditBtn";

const Row = ({ user: { id, name, age, ph_no } }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4 cell-editable row-title">{name}</td>
      <td className="px-6 py-4 cell-editable row-short">{age}</td>
      <td className="px-6 py-4 cell-editable row-fee">{ph_no}</td>
      <td className="px-6 py-4 text-right flex gap-1 justify-end">
        <RowEditBtn id={id} />
        <RowDeleteBtn id={id} />
      </td>
    </tr>
  );
};

export default Row;
