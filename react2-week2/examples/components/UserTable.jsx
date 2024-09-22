import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Switch, Icon } from '@mui/material';
import UserTableRow from './UserTableRow';


export default function UserTable({ users, dispatch }) {
    return <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Member</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Favorite Flavour</TableCell>
                        <TableCell>Icecreams</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <UserTableRow key={user.username} user={user} dispatch={dispatch} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
};