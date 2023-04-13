import { Fragment, useEffect, useState } from "react";
import { Category } from "../../model/category.enum";
import { RecomendationSection } from "./components";
import { EventSummary } from "../../model";

const getTestEvents = () => {
    const events: Array<EventSummary> = [];
    for(let i=0; i < 15; i++){
        events.push({
            id: i.toString(),
            title: 'Activity ' + i.toString(),
            imageUrl: 'https://applications-media.feverup.com/image/upload/f_auto,w_480,h_480,c_fill,g_north/fever2/plan/photo/276c6cc6-cfe3-11ed-9f57-c6efa92bcc14.jpg',
            price: 35000,
            stars: Math.random() * 5
        });
    }

    return events;
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Recommendations = () => {

    const [loadingData, setLoadingData] = useState<boolean>();
    const [topEvents, setTopEvents] = useState<Array<EventSummary>>([]);
    const [beautyEvents, setBeautyEvents] = useState<Array<EventSummary>>([]);
    const [concertEvents, setConcertEvents] = useState<Array<EventSummary>>([]);
    const [cultureEvents, setCultureEvents] = useState<Array<EventSummary>>([]);
    const [gastronomyEvents, setGastronomyEvents] = useState<Array<EventSummary>>([]);
    const [tourismEvents, setTourismEvents] = useState<Array<EventSummary>>([]);

    useEffect( () => {
        loadDataOnInit();
    }, []);

    const loadDataOnInit = async() => {
        setLoadingData(true);
        await timeout(1000);
        setTopEvents(getTestEvents());
        setBeautyEvents(getTestEvents());
        setConcertEvents(getTestEvents());
        setCultureEvents(getTestEvents());
        setGastronomyEvents(getTestEvents());
        setTourismEvents(getTestEvents());
        setLoadingData(false);
    }

    return (
        <div>
            {loadingData ? <h1>Loading...</h1> : 
            
            <Fragment>
                <RecomendationSection category={Category.TOP_10.valueOf()} events={topEvents}/>

                <RecomendationSection category={Category.BEAUTY.valueOf()} events={beautyEvents}/>

                <RecomendationSection category={Category.CONCERTS.valueOf()} events={concertEvents}/>

                <RecomendationSection category={Category.CULTURE.valueOf()} events={cultureEvents}/>

                <RecomendationSection category={Category.GASTRONOMY.valueOf()} events={gastronomyEvents}/>

                <RecomendationSection category={Category.TOURISM.valueOf()} events={tourismEvents}/>
            </Fragment>
            }
        </div>
    );
}

export default Recommendations;