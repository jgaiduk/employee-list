import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const EmplFooter = ({ renderChildren }) => (
    <TableFooter className='footer'>
        <TableRow>
            <TableCell colSpan='4'>
                Пользователи: {renderChildren()}
            </TableCell>
        </TableRow>
    </TableFooter>
);

export default EmplFooter;