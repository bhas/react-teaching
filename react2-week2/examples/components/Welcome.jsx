import React, { useContext } from 'react';
import { Typography, Container, Box, Select, MenuItem, Stack } from '@mui/material';
import { Roles } from '@/enums/Roles';
import { CurrentUserContext } from '@/contexts/CurrentUserContext';

export default function Welcome({onSetRole}) {
    const currentUser = useContext(CurrentUserContext);
    return (
        <Box 
            display="flex" 
            flexDirection="column"
            justifyContent="center" 
            alignItems="center" 
            minHeight="10vh"
            gap={2}
        >
            <Typography variant="h4" component="h4">
                Welcome, {currentUser.name}!
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography> You are a </Typography>
                <Select size='small' value={currentUser.role} onChange={e => onSetRole(e.target.value)}>
                    <MenuItem value={Roles.guardian}>{Roles.guardian}</MenuItem>
                    <MenuItem value={Roles.crawer}>{Roles.crawer}</MenuItem>
                </Select>
            </Stack>
            
        </Box>
    )
}