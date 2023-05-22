import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { universityIsLoadingSelector, universityItemsSelector } from 'selectors/university.selector';
import { AppDispatch } from 'state';
import { fetchUniversities } from 'state/universities/universities.effects';
import { slugToCapitalize } from 'utils/StringUtility';
import { UniversityCarousel } from 'view/components/UniversityCarousel';
import { UniversityTable } from 'view/components/UniversityTable';

export const CountryPage = () => {
    const { country } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState('');

    const universities = useSelector(universityItemsSelector);
    const isLoading = useSelector(universityIsLoadingSelector);

    useEffect(() => {
        dispatch(fetchUniversities({ country: slugToCapitalize(country as string), name }))
    }, [dispatch, name, country])

    return (
        <>
            <UniversityTable
                isLoading={isLoading}
                items={universities}
                name={name}
                onNameChange={setName}
            />
            <UniversityCarousel />
        </>
    )
}
