import { useNavigate } from "react-router-dom";
import { EventSummary } from "../../../../model";
import { 
    ActivityContainer, 
    ActivityImage, 
    ActivityPrice, 
    ActivityTitle 
} from "./styled-components";
import ReactGA from 'react-ga';
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const Activity = ({id, title, imageUrl, price, stars} : EventSummary) => {

    const navigate = useNavigate();

    const userEmail = useSelector((state: RootState) => state.email);

    const handleEventClick = () => {    
        navigate(`/e/${id}`);
        // SAVE GA OPEN EVENT
        ReactGA.event({
            category: 'User',
            action: 'Event Opened ' + userEmail + ' ' + id
        });
    }

    return(
        <ActivityContainer onClick={handleEventClick}>
            <ActivityImage src={imageUrl}/>
            <ActivityTitle>{title}</ActivityTitle>
            <ActivityPrice>${price} - {stars}</ActivityPrice>
        </ActivityContainer>
    );
}

export default Activity;