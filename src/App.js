import "./App.css";
import Header from "./shared/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import ManageUsers from "./routes/ManageUsers";
import ManageCourses from "./routes/ManageCourses";
import AddCourse from "./routes/AddCourse";
import useGetUser from "./utils/useGetUser";

function App() {
  const { user, isLoading } = useGetUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      {/* header section */}
      <Header />

      {/* routers segments */}
      <Routes>
        <Route
          path="/dashboard"
          element={user?.role === "admin" && <Dashboard />}
        >
          <Route path="add-course" element={<AddCourse />} />
          <Route path="manage-courses" element={<ManageCourses />} />
          <Route path="manage-users" element={<ManageUsers />} />
        </Route>
      </Routes>

      {/* footer section */}
      <Footer />

      {/* toast section */}
      <Toaster />
    </div>
  );
}

export default App;
