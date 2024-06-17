import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
  const response = useLoaderData();
  const events = response.events;
  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw { message: "Failed to load events." };
  } else {
    return response;
  }
}

export default EventsPage;