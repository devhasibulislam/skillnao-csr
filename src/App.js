import "./App.css";
import Header from "./shared/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import ManageUsers from "./routes/ManageUsers";
import ManageCourses from "./routes/ManageCourses";
import AddCourse from "./routes/AddCourse";
import Category from "./routes/Category";
import Academic from "./routes/Academic";
import Professional from "./routes/Professional";
import CourseDescription from "./routes/CourseDescription";
import NotFound from "./routes/NotFound";
import AuthGuard from "./components/AuthGuard";
import AdminGuard from "./components/AdminGuard";
import Home from "./routes/Home";
import useGetUser from "./utils/useGetUser";
import Loading from "./shared/Loading";
import MiniLoading from "./shared/MiniLoading";

function App() {
  const { isLoading} = useGetUser();
  return (
  <>
  { isLoading ? <MiniLoading/> :
      <div className="App">
      {/* header section */}
      <Header />

      {/* routers segments => dashboard */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/category" element={<Category />}>
          <Route path="academic" element={<Academic />} />
          <Route path="professional" element={<Professional />} />
        </Route>
        <Route path="popularPackages/:id" element={<AuthGuard><CourseDescription/></AuthGuard>} />


        {/* routers segments => dashboard */}
        <Route
          path="/dashboard"
          element={
            <AdminGuard>
              <Dashboard />
            </AdminGuard>
          }
        >
          <Route path="add-course" element={<AddCourse />} />
          <Route path="manage-courses" element={<ManageCourses />} />
          <Route path="manage-users" element={<ManageUsers />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* footer section */}
      <Footer />

      {/* toast section */}
      <Toaster />
    </div>
  }</>
  );
}

export default App;
