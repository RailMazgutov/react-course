import {createBrowserRouter, RouterProvider} from "react-router-dom";

import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {deleteEventAction, loader as eventDetailLoader} from "./pages/EventDetailPage";
import EventsLayout from "./pages/EventsLayout";
import EventsPage, {loader as eventsLoader} from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import {action as CUEvent} from './components/EventForm'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'events',
                element: <EventsLayout/>,
                children: [
                    {index: true, element: <EventsPage/>, loader: eventsLoader},
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {index: true, element: <EventDetailPage/>, action: deleteEventAction},
                            {path: 'edit', element: <EditEventPage/>, action: CUEvent},
                        ]
                    },
                    {path: 'new', element: <NewEventPage/>, action: CUEvent},

                ]
            },
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
