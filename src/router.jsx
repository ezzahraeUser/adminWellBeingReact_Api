import {createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import AdminLayout from './components/layouts/AdminLayout';
import DefaultLayout from './components/layouts/DefaultLayout';
import Home from './pages/Home';
import DashbordPage from './pages/DashbordPage';
import Instructors from './components/admin/dashbord/main/instructors/Instructors';
import Students from './components/admin/dashbord/main/students/Students';
import Dashbord from './components/admin/dashbord/main/Dashbord';
import Courses from './components/admin/dashbord/main/courses/Courses';
import Admins from './components/admin/dashbord/main/admins/Admins';
import CreateAdmin from './components/admin/dashbord/main/admins/CreateAdmin';
import Subscription from './components/admin/dashbord/main/paiements/Subscribers';
import SupportClient from './components/admin/dashbord/main/supportClient/SupportClient';
import Decipline from './components/admin/dashbord/main/courses/Decipline';
import NewCourses from './components/admin/dashbord/main/courses/NewCourses';
import Packs from './components/admin/dashbord/main/courses/Packs';
import NewPacks from './components/admin/dashbord/main/courses/NewPacks';
import Subscribers from './components/admin/dashbord/main/students/Subscribers';
import InstructorLayout from './components/layouts/InstructorLayout';
import Consultation from './components/instructor/Consultation';
import Test from './Test';
import DeciplineForm from './components/admin/dashbord/main/courses/DeciplineForm';
import DeciplineFormEdit from './components/admin/dashbord/main/courses/DeciplineFormEdit';
import AddClassForm from './components/admin/dashbord/main/courses/AddClassForm';
import EditClassForm from './components/admin/dashbord/main/courses/EditClassForm';
import RequestsInstructor from './components/admin/dashbord/main/instructors/RequestsInstructor';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/home',
                element: <Home/>,
            },
            {
                path: '/test',
                element: <Test/>,
            },
        ]
    },
    //Instructor Routes
    {
        path: '/instructor',
        element: <InstructorLayout/>,
        children: [
            {
                path: '/instructor/consultation',
                element: <Consultation/>,
            },
            {
                path: '/instructor/home',
                element: <Home/>,
            },
        ]
    },
    //Admin Routes
    {
        path: '/',
        element: <AdminLayout/>,
        children: [
            {
                path: '/admin',
                element: <DashbordPage/>,
                children: [
                    {
                        path:'/admin',
                        element: <Dashbord/>
                    },
                    {
                        path:'/admin/courses',
                        children: [
                            {
                                path:'/admin/courses',
                                element:<Courses/>
                            },
                            {
                                path:'/admin/courses/new-courses',
                                element: <NewCourses/>
                            },
                            {
                                path:'/admin/courses/packs',
                                element: <Packs/>
                            },
                            {
                                path:'/admin/courses/new-packs',
                                element: <NewPacks/>
                            },
                            {
                                path:'/admin/courses/decipline',
                                element: <Decipline/>
                            },
                            {
                                path:'/admin/courses/decipline/create-decipline',
                                element: <DeciplineForm/>
                            },
                            {
                                path: '/admin/courses/decipline/edit-decipline/:id',
                                element: <DeciplineFormEdit />
                            },
                            {
                                path: '/admin/courses/decipline/delete-decipline/:id',
                                element: <Decipline />
                            },
                            {
                                path: '/admin/courses/decipline/create-class/:id',
                                element: <AddClassForm />
                            },
                            {
                                path: '/admin/courses/decipline/edit-class/:id',
                                element: <EditClassForm />
                            },
                            {
                                path: '/admin/courses/decipline/delete-classe/:id',
                                element: <Decipline />
                            },
                            {
                                path: '/admin/courses/new-courses/approve-course/:id',
                                element: <NewCourses />
                            },
                            {
                                path: '/admin/courses/new-courses/decline-course/:id',
                                element: <NewCourses />
                            },
                            {
                                path: '/admin/courses/new-packs/approve-pack/:id',
                                element: <NewPacks />
                            },
                            {
                                path: '/admin/courses/new-packs/decline-pack/:id',
                                element: <NewPacks />
                            }
                              
                        ]
                    },
                    {
                        path:'/admin/instructors',
                        children: [
                            {
                                path:'/admin/instructors',
                                element:<Instructors/>
                            },
                            {
                                path:'/admin/instructors/requests',
                                element: <RequestsInstructor/>
                            },
                            {
                                path:'/admin/instructors/activate',
                                element: <Instructors/>
                            },
                            {
                                path:'/admin/instructors/desactivate',
                                element: <Instructors/>
                            }
                        ]
                    },
                    {
                        path:'/admin/students',
                        children: [
                            {
                                path: '/admin/students',
                                element: <Students/>,
                            },
                            {
                                path: '/admin/students/subscribers',
                                element: <Subscribers/>,
                            }

                        ]
                    },
                    {
                        path:'/admin/paiements',
                        element: <Subscription/>
                    },
                    {
                        path:'/admin/support-client',
                        element: <SupportClient/>
                    },
                    {
                        path:'/admin/admins',
                        children: [
                            {
                                path:'/admin/admins',
                                element:<Admins/>
                            },
                            {
                                path:'/admin/admins/create-admin',
                                element: <CreateAdmin/>
                            }
                        ]
                    },
                ]
            }
        ]
    }
])
export default router