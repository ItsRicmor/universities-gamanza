import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { universityIsLoadingSelector, universityItemsSelector } from 'selectors/university.selector';
import { AppDispatch } from "state";
import { fetchUniversities } from 'state/universities/universities.effects';
import { capitalizeToSlug } from 'utils/StringUtility';
import { UniversityTable } from 'view/components/UniversityTable';

export const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [name, setName] = useState('');

    const universities = useSelector(universityItemsSelector);
    const isLoading = useSelector(universityIsLoadingSelector);

    useEffect(() => {
        dispatch(fetchUniversities({ unique: true, name }))
    }, [dispatch, name])

    const goToCountry = (country: string) => {
        navigate(capitalizeToSlug(country));
    }

    return (
        <UniversityTable
            isLoading={isLoading}
            items={universities}
            name={name}
            onNameChange={setName}
            onRowDoubleClick={({ row }) => goToCountry(row.country)}
        />
    )
}
