import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Article, AssignmentInd, HomeFilled, Villa } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default function MobNavBarDrawer({ open, setOpen }) {

    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleNavigate = (link) => {
        navigate(link);
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem disablePadding onClick={() => handleNavigate('/')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeFilled />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => handleNavigate('/about_us')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText primary='About Us' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => handleNavigate('/property')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Villa />
                        </ListItemIcon>
                        <ListItemText primary='Properties' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding onClick={() => handleNavigate('/contact_us')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssignmentInd />
                        </ListItemIcon>
                        <ListItemText primary='Contact Us' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
