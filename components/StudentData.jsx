import { useState, useEffect, useMemo } from "react";
// import { useTable, usePagination } from "react-table";
import { getUsers, deleteUser } from "./StudentDataColumns";
import EditStudentData from "./EditStudentData"
import { useRouter } from "next/router";
import Link from 'next/link';
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
// import "./StudentData.scss";
// const StudentData = (props) => {
//   const router = useRouter();
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => data, []);
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     nextPage,
//     canNextPage,
//     canPreviousPage,
//     previousPage,
//     pageOptions,
//     state,
//     gotoPage,
//     pageCount,
//     setPageSize,
//     prepareRow,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageSize: 25 },
//     },
//     usePagination
//   );
//   const { pageIndex, pageSize } = state;
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = () => {
//     fetch("http://digitalaidedschool.com/api/data")
//       .then((response) => response.json())
//       .then((result) => console.log(result));
//   };
//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => {
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => {
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>;
//               })}
//             </tr>;
//           })}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowprops()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div>
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {"<<"}
//         </button>
//         <button
//           onClick={() => {
//             previousPage();
//           }}
//           disabled={!canPreviousPage}
//         >
//           Previous
//         </button>
//         <span>
//           Page {pageIndex + 1} of {pageOptions.length}{" "}
//         </span>
//         <span>
//           Go to Page: {""}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const pageNumber = e.target.value
//                 ? Number(e.target.value) - 1
//                 : 0;
//               gotoPage(pageNumber);
//             }}
//             style={{ width: "40px" }}
//           ></input>
//           <select
//             value={pageSize}
//             onChange={(e) => setPageSize(Number(e.target.value))}
//           >
//             {[10, 25, 50].map((pageSize) => (
//               <option key={pageSize} value={pageSize}>
//                 Show {pageSize}
//               </option>
//             ))}
//           </select>
//         </span>
//         <button
//           onClick={() => {
//             nextPage();
//           }}
//           disabled={!canNextPage}
//         >
//           Next
//         </button>
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {">>"}
//         </button>
//       </div>
//     </>
//   );
// };

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 24,
      height: "100px",
      textAlign: "center",
      background: "#fd7e14",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      textAlign: "center",
      fontSize: 16,
    },
  },
  tcell: {
    "& > *": {
      // margin: "0 auto",
      width: "85%",
    },
  },
});

const StudentData = () => {
  const [users, setUsers] = useState([]);
  const [disposition, setDisposition] = useState("No Answer");
  // const [editdata, setEditdata] = useState(false);           // Popup for edit button
  const [buttonclick, setButtonclick] = useState(0);            // Continously fetch data 
  const classes = useStyles();

  const router = useRouter();

  useEffect(() => {
    getAllUsers();
  }, [buttonclick]);

  // const deleteUserData = async (id) => {
  //   await deleteUser(id);
  //   getAllUsers();
  // }

  const getAllUsers = async () => {
    let data = await getUsers();
    console.log(data);
    setUsers(data);
  };
  console.log(users);

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell className={classes.tcell}>Name</TableCell>
          <TableCell className={classes.tcell}>Email</TableCell>
          <TableCell className={classes.tcell}>Phone</TableCell>
          <TableCell className={classes.tcell}>Course</TableCell>
          <TableCell className={classes.tcell}>Disposition Status</TableCell>
          {/* <TableCell className={classes.tcell}>Disposition</TableCell> */}
          <TableCell className={classes.tcell}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row} key={user._id}>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phoneNumber}</TableCell>
            <TableCell>{user.course}</TableCell>
            <TableCell>{user.disposition}</TableCell>
            {/* <TableCell>
              <select
                name="disposition"
                value={disposition}
                onChange={(e) => setDisposition(e.target.value)}
              >
                <option value="No Answer">No Answer</option>
                <option value="Callback">Callback</option>
                <option value="Not Intrested">Not Intrested</option>
                <option value="Enrolled">Enrolled</option>
              </select>
            </TableCell> 
            To use target use a tag and style it as button*/}
            <TableCell>
                <Link href = {'/students/' + user._id} target={"_blank"}>  
                  <a target="_blank"
                    className="editbtn"
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    onClick={() => setButtonclick( 
                      setTimeout( () => {
                        buttonclick + 1
                      }, 2000 ))}
                  >
                    Edit
                  </a>
                </Link> 
              {/* <EditStudentData trigger={editdata} setTrigger={ setEditdata } student = {user._id}/> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentData;
