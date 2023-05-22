import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'

export const Header = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Link to="/" className={styles.headerLink}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Gamanza Universities
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
