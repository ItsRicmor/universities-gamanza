import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BreadcrumbsComponent from '@mui/material/Breadcrumbs';
import { useMatches, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { RouteEnum } from 'constants/RouteEnum';


export const Breadcrumbs = () => {
    const navigate = useNavigate();
    const matches = useMatches();
    const { country, university } = useParams();

    const crumbsFiltered = matches
        .filter((match: any) => Boolean(match.handle?.Crumb))

    const crumbs: any[] = crumbsFiltered.map((match: any, index: number) => match.handle.Crumb(crumbsFiltered.length - 1 === index, country, university));

    const showBackButton = window.history.state && window.history.state.idx > 0;


    const goBack = () => {
        if (showBackButton) {
            navigate(-1)
        } else {
            navigate(RouteEnum.Home)
        }
    };


    return (
        <Box
            display="flex"
            justifyContent={showBackButton ? 'space-between' : 'end'}
            alignItems="center"
            marginBottom="30px"
        >
            {showBackButton && (
                <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={goBack}>
                    Back
                </Button>
            )}
            <BreadcrumbsComponent
                aria-label="breadcrumb"
                component={Box}
                display="flex"
                alignItems="center"
                separator={<ArrowForwardIosIcon fontSize="small" sx={{ width: '15px', height: '15px' }} />}
            >
                {crumbs?.map((Crumb: any, index: number) => (
                    <div key={index}>
                        {Crumb}
                    </div>
                ))}
            </BreadcrumbsComponent>
        </Box>
    );
}
