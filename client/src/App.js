import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
// import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import ProjectCoordinatorRoute from './components/Routes/ProjectCoordinatorRoute';
import ProjectCoordinatorDashboard from './pages/ProjectCoordinator/ProjectCoordinatorDashboard';
import SupervisorRoute from './components/Routes/SupervisorRoute';
import SupervisorDashboard from './pages/Supervisor/SupervisorDashboard';
import ExaminerRoute from './components/Routes/ExaminerRoute';
import ExaminerDashboard from './pages/Examiner/ExaminerDashboard';
import ProjectMemberRoute from './components/Routes/ProjectMemberRoute';
import ProjectMemberDashboard from './pages/ProjectMember/ProjectMemberDashboard';
import Dashboard from './pages/user/Dashboard';
import CreateProjectGroup from './pages/user/CreateProjectGroup';
import MyAssignment from './pages/user/MyAssignment';
import MyGroupDetails from './pages/user/MyGroupDetails';
import CreateNewUser from './pages/ProjectCoordinator/CreateNewUser';
import ProjectCoordinators from './pages/ProjectCoordinator/ProjectCoordinators';
import ProjectMembers from './pages/ProjectCoordinator/ProjectMembers';
import Examiners from './pages/ProjectCoordinator/Examiners';
import Supervisors from './pages/ProjectCoordinator/Supervisors';
import Students from './pages/ProjectCoordinator/Students';
import UserProfile from './pages/user/UserProfile';
import UpdateUser from './pages/user/UpdateUser';
import ProjectCoordinatorProfile from './pages/ProjectCoordinator/ProjectCoordinatorProfile';
import UpdateProjectCoordinator from './pages/ProjectCoordinator/UpdateProjectCoordinator';
import OTPform from './pages/Auth/OTPform';
import OTPverifyForm from './pages/Auth/OTPverifyForm';
import CreateAssignment from './pages/ProjectCoordinator/CreateAssignment';

function App({ child }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* USER ROUTES */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/my-profile" element={<UserProfile />} />
          <Route path="user/project-group" element={<CreateProjectGroup />} />
          <Route path="user/assignment" element={<MyAssignment />} />
          <Route path="user/update-profile" element={<UpdateUser />} />

          <Route
            path="user/my-group"
            element={<MyGroupDetails child={child} />}
          />
        </Route>
        {/* PROJECT COORDINATOR ROUTES */}
        <Route path="/dashboard" element={<ProjectCoordinatorRoute />}>
          <Route
            path="projectCoordinator"
            element={<ProjectCoordinatorDashboard />}
          />
          <Route
            path="projectCoordinator/update-profile"
            element={<UpdateProjectCoordinator />}
          />
          <Route
            path="projectCoordinator/my-profile"
            element={<ProjectCoordinatorProfile />}
          />
          <Route
            path="projectCoordinator/add-user"
            element={<CreateNewUser />}
          />
          <Route
            path="projectCoordinator/all-project-coordinators"
            element={<ProjectCoordinators />}
          />
          <Route
            path="projectCoordinator/all-project-members"
            element={<ProjectMembers />}
          />
          <Route
            path="projectCoordinator/all-examiners"
            element={<Examiners />}
          />
          <Route
            path="projectCoordinator/all-supervisors"
            element={<Supervisors />}
          />
          <Route
            path="projectCoordinator/all-students"
            element={<Students />}
          />
          <Route
            path="projectCoordinator/create-assignment"
            element={<CreateAssignment />}
          />
        </Route>
        <Route path="/dashboard" element={<SupervisorRoute />}>
          <Route path="supervisor" element={<SupervisorDashboard />} />
        </Route>
        <Route path="/dashboard" element={<ExaminerRoute />}>
          <Route path="examiner" element={<ExaminerDashboard />} />
        </Route>
        <Route path="/dashboard" element={<ProjectMemberRoute />}>
          <Route path="projectMember" element={<ProjectMemberDashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/sendEmail" element={<sendEmail />} />
        <Route path="/sendotp" element={<OTPform />} />
        <Route path="/verify-otp" element={<OTPverifyForm />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
