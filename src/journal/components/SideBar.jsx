import { TurnedInNot } from '@mui/icons-material'
import { Drawer, Box, Toolbar, Typography, List, Divider, ListItem, ListItemButton, Grid, ListItemText, ListItemIcon } from '@mui/material'

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'//temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        TotoroDavid
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['January', 'February', 'March', 'April'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Exercitation cillum irure elit consectetur.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box >
    )
}
