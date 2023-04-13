import { useEffect, useState, Fragment, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Event, Review, Category } from '../../model';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
// STYLED COMPONENTS
import {
    Header,
    EventLogo,
    HeaderTitleContainer,
    HeaderTitle,
    HeaderDate,
    InfoContainer,
    InfoTitle,
    InfoBody,
    SubscribeButton
} from './styled-components';
import { LatLngExpression } from "leaflet";
import ReactGA from 'react-ga';
import { sendMail, subscribeToEvent } from "../../services/user.service";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TEST_EVENT: Event = {
    id: '643748c93f3459184e4916ec',
    title: 'Plan à 3 au Théâtre du Gymnase',
    date: new Date('2023-04-21'),
    imageUrl: 'https://applications-media.feverup.com/image/upload/f_auto,w_320,h_320/fever2/plan/photo/119734fa-cfbe-11ed-88a9-c2afacc801d3.jpg',
    description: `Virtual Planet te ofrece una experiencia alucinante de juegos de realidad virtual. Ven con tus amigos y elige entre su amplia oferta de juegos multijugador y cooperativos y escape room virtuales. ¿Preparado para vivir la diversión sin límites? ¡Disfruta de tu plan de experiencia de realidad virtual en Virtual Planet, Madrid.`,
    price: 2400,
    information: [
        '📅 Fecha: de lunes a domingo',
        '🕐 Hora: de 12:00 a 22:00. Debes acudir con 10 minutos de antelación',
        '⏳ Duración: 1 hora',
        '📍 Lugar: Virtual Planet, Madrid',
        '👤 Edad mínima: 8 años y 1,40 m de estatura',
        '📱 Tras la compra, es imprescindible que mires las instrucciones en tu mail de confirmación para completar y garantizar tu reserva'
    ],
    reviews: [
        {
            id: '1',
            author: 'Christian M.',
            stars: '5',
            comment: 'Muy bueno :3'
        },
        {
            id: '2',
            author: 'Christian M.',
            stars: '5',
            comment: 'Muy bueno :3'
        },
        {
            id: '3',
            author: 'Christian M.',
            stars: '5',
            comment: 'Muy bueno :3'
        },
    ],
    latitude: 40.416775,
    longitude: -3.703790,
    categories: [Category.TOP_10, Category.CULTURE]
}

const EventPage = () => {

    const { eventId } = useParams();
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [event, setEvent] = useState<Event>();

    const position: LatLngExpression = [51.505, -0.09];

    const AUTH_TOKEN = useSelector((state: RootState) => state.token);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoadingData(true);
        await timeout(1000);
        setEvent(TEST_EVENT);
        setLoadingData(false);
    }

    const handleSubscribe = () => {
        ReactGA.event({
            category: 'User',
            action: 'Event Subscription'
        });
        subscribeToEvent(AUTH_TOKEN, event ? event.title : "");
    }

    return (
        <Fragment>
            {loadingData ? <h1>Loading...</h1> :
                <Fragment>
                    <Header>
                        <EventLogo src={event?.imageUrl} />

                        <HeaderTitleContainer>
                            <HeaderTitle>{event?.title}</HeaderTitle>
                            <HeaderDate><AiOutlineCalendar size={30} />{event?.date.toDateString()}</HeaderDate>
                        </HeaderTitleContainer>
                    </Header>

                    <InfoContainer>
                        <InfoBody>
                            <InfoTitle>Informacion</InfoTitle>
                            {event?.information.map((item, idx) => {
                                return (
                                    <p key={idx}>{item}</p>
                                );
                            })}
                        </InfoBody>
                    </InfoContainer>

                    <InfoContainer>
                        <InfoBody>
                            <InfoTitle>Descripcion</InfoTitle>

                            <p>{event?.description}</p>
                        </InfoBody>
                    </InfoContainer>
                    
                    
                    <InfoContainer>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    {event?.title}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </InfoContainer>

                    <InfoContainer>
                        <SubscribeButton onClick={handleSubscribe}>Suscribirme</SubscribeButton>
                    </InfoContainer>
                </Fragment>
            }
        </Fragment>
    );
}

export default EventPage;