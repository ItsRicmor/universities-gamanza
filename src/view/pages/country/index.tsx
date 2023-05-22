import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { universityItemsSelector } from 'selectors/university.selector';
import { AppDispatch } from 'state';
import { fetchUniversities } from 'state/universities/universities.effects';
import { UniversityTable } from 'view/components/UniversityTable';

export const CountryPage = () => {
    const { country } = useParams();
    const navigate = useNavigate();
    const universities = useSelector(universityItemsSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchUniversities({ country }))
    }, [dispatch])

    const goToUniversity = (name: string) => {
        console.log(name)
        navigate(`/individual/${country}/${name.replace(' ', '-')}`);
    }

    return (
        <UniversityTable items={universities} onRowDoubleClick={({ row }) => goToUniversity(row.name)} />
    )
}
