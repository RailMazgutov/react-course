import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
  const response = useLoaderData();
  const events = response.events;
  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    return json({message: "Could not fetch events"}, {status: 500});
  } else {
    return response;
  }
}

export default EventsPage;