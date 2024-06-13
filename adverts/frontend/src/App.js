import {createBrowserRouter, RouterProvider} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import HomePage from "./pages/HomePage";
import EventsLayout from "./pages/EventsLayout";

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
          {index: true, element: <EventsPage />, loader: async () => {
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
              // ...
            } else {
              const resData = await response.json();
              return resData.events;
            }
          }},
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
