import Container from '@mui/material/Container';
import { ReactNode } from 'react';
import { Breadcrumbs } from 'view/components/Breadcrumbs';

type Props = {
    children: ReactNode
}

export const Content = ({ children }: Props) => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '30px' }}>
            <Breadcrumbs />
            {children}
        </Container>
    )
}
