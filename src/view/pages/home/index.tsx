import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { universityItemsSelector } from 'selectors/university.selector';
import { AppDispatch, RootState } from "state";
import { fetchUniversities } from 'state/universities/universities.effects';
import { UniversityTable } from 'view/components/UniversityTable';

export const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [name, setName] = useState('')

    const universities = useSelector(universityItemsSelector);

    useEffect(() => {
        dispatch(fetchUniversities({ unique: true, name }))
    }, [dispatch, name])

    const goToCountry = (country: string) => {
        navigate(country)
    }

    return (
        <>
            <Box
                component="form"
                autoComplete="off"
                display="flex"
                justifyContent="center"
                marginBottom="30px"
                width="100%"
            >
                <TextField fullWidth label="Search" variant="outlined" value={name} onChange={({ target }) => setName(target.value)} />
            </Box>
            <UniversityTable items={universities} onRowDoubleClick={({ row }) => goToCountry(row.country)} />
        </>
    )
}
