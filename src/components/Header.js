import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const EmplHeader = ({ handleClick }) => (
    <TableHead className='header'>
        <TableRow>
            <TableCell
                padding="checkbox">
                <Checkbox
                    onChange={(e) => handleClick(e.target.checked)}
                />
            </TableCell>
            <TableCell
                colSpan='3'
                padding="checkbox">
                Выделить всё
            </TableCell>
        </TableRow>
    </TableHead>
);

export default EmplHeader;