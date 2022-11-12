import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MyTable() {
  return (
    <TableContainer component={Paper} className="bg-table mt-lg-0 mt-4">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="text-color">Dessert (100g serving)</TableCell>
            <TableCell className="text-color" align="center">Calories</TableCell>
            <TableCell className="text-color" align="center">Fat&nbsp;(g)</TableCell>
            <TableCell className="text-color" align="center">Carbs&nbsp;(g)</TableCell>
            <TableCell className="text-color" align="center">Protein&nbsp;(g)</TableCell>
            <TableCell className="text-color" align="center">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="text-color" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="text-color" align="center">{row.calories}</TableCell>
              <TableCell className="text-color" align="center">{row.fat}</TableCell>
              <TableCell className="text-color" align="center">{row.carbs}</TableCell>
              <TableCell className="text-color" align="center">{row.protein}</TableCell>
              <TableCell className="text-color" align="center"><Link to="/Dashboard"><button className='btn-table'>Click</button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}