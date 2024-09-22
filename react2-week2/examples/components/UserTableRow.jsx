import React, { useContext, useReducer } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, Switch, Icon, Button, Stack, Chip } from '@mui/material';
import { Roles } from '@/enums/Roles';
import IcecreamIcon from '@mui/icons-material/Icecream';
import { CurrentUserContext } from '@/contexts/CurrentUserContext';
import { TeamMembersDispatchContext } from '@/contexts/TeamMembersContext';

export default function UserTableRow({ user }) {

    const currentUser = useContext(CurrentUserContext);
    const dispatch = useContext(TeamMembersDispatchContext);

    const onExpelMember = () => {
        dispatch({
            type: "remove_member",
            memberId: user.id
        })
    }

    const onGrantIcecream = () => {
        console.log("clicked twice")
        dispatch({
            type: "grant_icecream",
            memberId: user.id
        })
    }

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
                        <Button variant="outlined" endIcon={<IcecreamIcon />} onClick={onGrantIcecream}>Grant Icecream</Button>
                        <Button variant="outlined" color="error" onClick={() => onExpelMember()}>Expel</Button>
                    </Stack>
                }
            </TableCell>
        </TableRow>
    );
};