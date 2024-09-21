import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Switch, Icon, Button, Stack, Chip } from '@mui/material';
import { Roles } from '@/enums/Roles';
import IcecreamIcon from '@mui/icons-material/Icecream';
import { CurrentUserContext } from '@/contexts/CurrentUserContext';

export default function UserTableRow({ user, onGrantIcecream, onExpel }) {

    const currentUser = useContext(CurrentUserContext);

    const getFlavourColor = (flavour) => {
        switch (flavour) {
            case 'vanilla':
                return 'success';
            case 'chocolate':
                return 'info';
            case 'strawberry':
                return 'error';
            default:
                return 'default';
        }
    }

    return (
        <TableRow>
            <TableCell>{user.username}</TableCell>
            <TableCell>
                {user.role}
            </TableCell>
            <TableCell>
                <Chip 
                    label={user.favoriteFlavour} 
                    size="small"
                    color={getFlavourColor(user.favoriteFlavour)} 
                />
            </TableCell>
            <TableCell>
                {user.icecreams}
            </TableCell>
            <TableCell>
                { currentUser?.role === Roles.guardian &&
                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" endIcon={<IcecreamIcon />} onClick={() => onGrantIcecream()}>Grant Icecream</Button>
                        <Button variant="outlined" color="error" onClick={() => onExpel()}>Expel</Button>
                    </Stack>
                }
            </TableCell>
        </TableRow>
    );
};