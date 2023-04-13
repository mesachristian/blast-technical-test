import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/user"

const SUBSCRIBE_URL = BASE_URL + "/subscribe";

const SEND_EMAIL_URL = BASE_URL + '/send-mail';

export const subscribeToEvent = async (token: string, eventId: string) => {
    try {
        const { data } = await axios.post(SUBSCRIBE_URL, 
        {
            eventId: eventId
        },{
            headers: {
                'Authorization' : 'Bearer ' + token,
            }
        });
        console.log(data);   
    } catch (error) {
        console.log(error);
    }
    return "";
}

export const sendMail = async (token: string) => {
    await axios.get(SEND_EMAIL_URL, {
        headers:{
            'Authorization' : 'Bearer ' + token
        }
    });
}