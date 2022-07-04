import { Avatar, Badge, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, TextField } from '@mui/material';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WebIcon from '@mui/icons-material/Web';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { useState } from 'react';

function StrAvatar(str){
let arr=str.split(' ');
let output=' ';
for(let i=0;i<arr.length;i++){
    output+=(arr[i][0].toUpperCase());
}
return(output);
}

export default function AdminHeader(){
    const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <header className="admin-header-navbar">

            <div className='admin-header-div-1'>
                <Button startIcon={<WebIcon/>}>
                    <span>تصفح الموقع</span>
                </Button>
            </div>

            <div className='admin-header-div-2'>

                <div className='admin-header-div-2-item admin-header-div-2-item-search'>
                    <SearchIcon/>
                    <TextField size='small' placeholder='Search...' />
                </div>

                <div className='admin-header-div-2-item'>
                    <IconButton>
                        <Badge overlap="circular" variant="dot" color="secondary">
                            <NotificationsNoneIcon color="primary" />
                        </Badge>
                    </IconButton>
                </div>

                <div className='admin-header-div-2-item'>
                    <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    style={{padding:0}}>
                        <Avatar>{StrAvatar('YASSINE ZEBIRI')}</Avatar>
                    </IconButton>
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
                            <ListItemIcon>
                                <Avatar/>
                            </ListItemIcon>
                            حسابي
                        </MenuItem>



                        <Divider/>

                        <MenuItem>
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            اعدادات
                        </MenuItem>

                        <MenuItem>
                            <ListItemIcon>
                                <Logout/>
                            </ListItemIcon>
                            تسجيل الخروج
                        </MenuItem>

                    </Menu>
                </div>
            </div>
        </header>
    )
}