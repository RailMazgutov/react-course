import {createBrowserRouter, RouterProvider} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import HomePage from "./pages/HomePage";


// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/events', element: <EventsPage />},
      {path: '/events/:eventId', element: <EventDetailPage />},
      {path: '/events/new', element: <NewEventPage />},
      {path: '/events/:eventId/edit', element: <EditEventPage />},
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
