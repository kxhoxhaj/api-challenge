import React from 'react'
import TableDetails from './TableDetails'

const TableRow = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
          return (
            <TableDetails key={key} cellData={JSON.stringify(value)} />
          );
      })}
    </tr>
  )
}

export default TableRow
