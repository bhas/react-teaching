import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Switch, Icon, Button, Stack } from '@mui/material';
import { Roles } from '@/enums/Roles';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function UserTableRow({ user, onGrantIcecream, onExpel }) {

    const isGuardian = true;
    return (
        <TableRow>
            <TableCell>{user.username}</TableCell>
            <TableCell>
                {user.role}
            </TableCell>
            <TableCell>
                {user.favoriteFlavour}
            </TableCell>
            <TableCell>
                {user.icecreams}
            </TableCell>
            <TableCell>
                { isGuardian &&
                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" endIcon={<IcecreamIcon />} onclick={() => onGrantIcecream()}>Grant Icecream</Button>
                        <Button variant="outlined" color="error" onclick={() => onExpel()}>Expel</Button>
                    </Stack>
                }
            </TableCell>
        </TableRow>
    );
};