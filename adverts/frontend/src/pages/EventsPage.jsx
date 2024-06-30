import EventsList from '../components/EventsList';
import {Await, defer, json, useLoaderData} from 'react-router-dom';
import {Suspense} from "react";

function EventsPage() {
    const data = useLoaderData();


    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={data.events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        return json({message: "Could not fetch events"}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents()
    });
}

export default EventsPage;