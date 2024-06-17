import {createBrowserRouter, RouterProvider} from "react-router-dom";

import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsLayout from "./pages/EventsLayout";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

import { loader as eventsLoader } from "./pages/EventsPage";
import { loader as eventDetailLoader } from "./pages/EventDetailPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events', 
        element: <EventsLayout />, 
        id: 'event-detail',
        children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {
            path: ':eventId',
            loader: eventDetailLoader,
            children: [
              {index: true, element: <EventDetailPage />},
              {path: 'edit', element: <EditEventPage />},
            ]
          },
          {path: 'new', element: <NewEventPage />},
         
        ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
