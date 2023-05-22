import Container from '@mui/material/Container';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export const Content = ({ children }: Props) => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '30px' }}>
            {children}
        </Container>
    )
}
