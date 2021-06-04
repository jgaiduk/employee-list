import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import EmplHeader from './Header';
import EmplFooter from './Footer';

const TableEmployees = ({
    employees,
    handleSelect,
    handleSelectAll,
    renderSelected,
    isChecked }) => {
    return (
        <TableContainer className='tableContent' >
            <Table>
                <EmplHeader handleClick={handleSelectAll} />
                <TableBody>
                    {employees.map((row) => (
                        <TableRow
                            hover
                            key={row.id}
                            selected={isChecked(row.id)}
                            onClick={() => handleSelect(row.id)}>
                            <TableCell padding="checkbox">
                                <Checkbox checked={isChecked(row.id)} />
                            </TableCell>
                            <TableCell padding="checkbox">{row.firstName}</TableCell>
                            <TableCell padding="checkbox">{row.lastName}</TableCell>
                            <TableCell padding="checkbox">{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <EmplFooter renderChildren={renderSelected} />
            </Table>
        </TableContainer>
    )
};

export default TableEmployees;