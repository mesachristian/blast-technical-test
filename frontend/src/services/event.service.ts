import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/event"

export const getEventInfo = async (token:string, eventId: string) => {
    await axios.get(BASE_URL, {
        params: { id: eventId },
        headers:{
            'Authorization' : 'Bearer ' + token
        }
    });
}

