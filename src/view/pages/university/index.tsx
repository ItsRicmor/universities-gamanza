import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { universitiesByCountryNameSelector } from "selectors/university.selector";
import { RootState } from "state";

export const UniversityPage = () => {
    const navigate = useNavigate();
    const { country, university } = useParams();

    const universityModel = useSelector((state: RootState) => universitiesByCountryNameSelector(state, { country: country as string, name: university as string }))

    console.log(university)

    return (
        <div>UniversityPage</div>
    )
}
