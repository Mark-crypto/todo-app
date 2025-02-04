import { createBrowserRouter } from "react-router";
import Today from "./pages/Today";
import Message from "./pages/Message";
import LastActivity from "./pages/LastActivity";
import NewTask from "./pages/NewTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Today />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/last-activity",
    element: <LastActivity />,
  },
  {
    path: "/new-task",
    element: <NewTask />,
  },
]);
function App() {
  return (
    <>
      <h5>To Do App</h5>
    </>
  );
}

export default App;
