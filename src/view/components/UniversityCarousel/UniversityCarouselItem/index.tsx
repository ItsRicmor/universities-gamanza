
import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IUniversity } from 'models/IUniversity';
import ReactCountryFlag from "react-country-flag";

type Props = {
    imageUrl: string;
    university: IUniversity
    onClick: (university: IUniversity) => () => void
}

export const UniversityCarouselItem = ({ imageUrl, university, onClick }: Props) => (
    <Card>
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {university.name}
                    <ReactCountryFlag countryCode={university.alpha_two_code} svg style={{ marginLeft: '10px' }} />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={onClick(university)}>
                    Go to the University
                </Button>
            </CardActions>
        </Card>
    </Card>
)

