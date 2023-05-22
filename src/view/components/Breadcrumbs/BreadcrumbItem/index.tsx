import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';


type Props = {
    isActive: boolean;
    to?: string;
    children: ReactNode;
}

export const BreadcrumbItem = ({ isActive, to, children }: Props) =>
    isActive ? <Typography color="text.primary" fontWeight="600">{children}</Typography> : <Link href={to}>{children}</Link>
