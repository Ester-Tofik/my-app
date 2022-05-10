import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import { useHistory } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();
    const navigatToEdit =()=> {
        history.push('/edit')
    }
    const navigatToHome =()=> {
        history.push('/home')
    }
    const navigatToLogIn = () => {
        history.push('/');
    }
    const navigatToReminderManagement = () => {
        history.push('/reminderManagement');
    }
    
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <PermIdentityTwoToneIcon color="action" /> Profile
                </MenuItem>
                <MenuItem onClick={navigatToEdit} >
                    < ModeEditIcon color="action"/>   עריכת הפרטים שלי
                </MenuItem>
                <Divider />
                <MenuItem onClick={navigatToHome}>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                   דף הבית 
                </MenuItem>
                <MenuItem onClick={navigatToReminderManagement}>
                    <ListItemIcon>
                        <NotificationsActiveIcon fontSize="small" />
                    </ListItemIcon>
                    ניהול תזכורות
                </MenuItem>
                <MenuItem onClick={navigatToLogIn}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    יציאה מהחשבון
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
