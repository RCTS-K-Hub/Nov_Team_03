import React from 'react';
import { useTable } from 'react-table';
//import 'react-table/styles.css';
import './table.css';

const TableComponent = () => {
  // Sample data for the table
  const data = React.useMemo(
    () => [
      { col1: 'Hydrangea', col2: 'maroon', col3: 'winter', col4: 'shrub', col5: '$50' },
      { col1: 'Impatiens', col2: 'pink', col3: 'winter', col4: ' touch-me-nots', col5: '$90' },
      { col1: 'Truncata', col2: 'red', col3: 'summer', col4: 'cactus', col5: '$80' },
      { col1: 'Andean Lupin', col2: 'purple', col3: 'spring', col4: 'endemic legume', col5: '$60' },
    ],
    []
  );

  // Columns configuration
  const columns = React.useMemo(
    () => [
      { Header: 'NAME', accessor: 'col1' },
      { Header: 'COLOUR', accessor: 'col2' },
      { Header: 'SEASON', accessor: 'col3' },
      { Header: 'TYPE', accessor: 'col4' },
      { Header: 'PRICE', accessor: 'col5' },
    ],
    []
  );

  // Use the useTable hook to create an instance of the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: '1px solid black', width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: '1px solid black' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
