import {createBrowserRouter, RouterProvider} from "react-router-dom";

import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsLayout from "./pages/EventsLayout";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";

import { loader as eventsLoader } from "./pages/EventsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events', 
        element: <EventsLayout />, 
        children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {path: ':eventId', element: <EventDetailPage />},
          {path: 'new', element: <NewEventPage />},
          {path: ':eventId/edit', element: <EditEventPage />},
        ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
