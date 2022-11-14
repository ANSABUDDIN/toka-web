import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 400,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , width: 400  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , width: 400  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , width: 400  },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , width: 400  },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 10 , width: 400  },
  { id: 6, lastName: 'Melisandre', firstName: "hello", age: 150 , width: 400  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , width: 400  },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , width: 400  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , width: 400  },
];

export default function MyTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}





























// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Link } from 'react-router-dom';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function MyTable() {
//   return (
//     <TableContainer component={Paper} className="bg-table mt-lg-0 mt-4">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="text-pink fw-bold">Dessert (100g serving)</TableCell>
//             <TableCell className="text-pink fw-bold" align="center">Calories</TableCell>
//             <TableCell className="text-pink fw-bold" align="center">Fat&nbsp;(g)</TableCell>
//             <TableCell className="text-pink fw-bold" align="center">Carbs&nbsp;(g)</TableCell>
//             <TableCell className="text-pink fw-bold" align="center">Protein&nbsp;(g)</TableCell>
//             <TableCell className="text-pink fw-bold" align="center">Button</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell className="text-light fw-500" component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell className="text-light fw-500" align="center">{row.calories}</TableCell>
//               <TableCell className="text-light fw-500" align="center">{row.fat}</TableCell>
//               <TableCell className="text-light fw-500" align="center">{row.carbs}</TableCell>
//               <TableCell className="text-light fw-500" align="center">{row.protein}</TableCell>
//               <TableCell className="text-light fw-500" align="center"><Link to="/Dashboard"><button className='btn-table'>Click</button></Link></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }