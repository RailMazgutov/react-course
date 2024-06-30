import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

export default function EventDetailPage() {
    const {event, events} = useRouteLoaderData('event-detail');
    return (
        <>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading event...</p>}>
                <Await resolve={event}>
                    {(event) => <EventItem event={event}/>}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading events list...</p>}>
                <Await resolve={events}>
                    {(events) => <EventsList events={events}/>}
                </Await>
            </Suspense>
        </>

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

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: "Failed to load the event!"}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

export async function loader({request, params}) {
    const id = params.eventId;

    return defer({
        events: loadEvents(),
        event: await loadEvent(id)
    })
}

export async function action({request, params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method,
    });

    if (!response.ok) {
        throw json({message: "Failed to delete the event!"}, {status: 500});
    }

    return redirect('/events');
}
