import React, { useMemo, useState } from 'react'
import { useTable } from 'react-table'
import styles from './Table.module.scss';


function Table({ data, column }) {


  const [value, setValue] = useState({
    val: "sale",
    source : ""
  })

    const col = useMemo(() => column, [column]);
  const leads = useMemo(() => data, [data]);
  
    const {
        headerGroups,
        rows,
        getTableBodyProps,
        getTableProps,
        prepareRow } = useTable({
            columns: col,
            data: leads
  })
    return (
        <div className={styles.table__wrapper}>
    <table className={styles.table} {...getTableProps()}>
        <thead> 
          {
            headerGroups.map((headerGroup =>
            {
              return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column =>
                  {
                    return (
                    <th {...column.getHeaderProps()}>
                      {
                        column.render('Header')
                      }
                      </th>
                    )
                  })
                }
                </tr>
              )
            }))
            }
        </thead> 
        <tbody {...getTableBodyProps()}>
          {
            rows.map(row =>
            {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell =>
                    {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell', {value , setValue}  ) }</td>
                      )
                    })
                  }
                </tr>
              )
            })
          } 
        </tbody>
            </table>
        </div>
    )
}

export default Table
