import { useQuery } from 'react-query';
import { getCourses } from '../../../../../api/api__admin';
import NavbarDash from '../../navbar/NavbarDash';
import Table from '../Table';
import '../main.css'

function Courses(sidebarOpen, openSidebar) {
    const links = [
        { label: 'Courses', url: '/admin/courses' ,isActive:location.pathname =="/admin/courses"},
        { label: 'New Courses', url: '/admin/courses/new-courses' ,isActive:location.pathname =="/admin/courses/new-courses" },
        { label: 'Packs', url: '/admin/courses/packs' ,isActive:location.pathname =="/admin/courses/packs" },
        { label: 'New Packs', url: '/admin/courses/new-packs' ,isActive:location.pathname =="/admin/courses/new-packs" },
        { label: 'Decipline', url: '/admin/courses/decipline' ,isActive:location.pathname =="/admin/courses/decipline" },
    
    ]
    const { data: courses, isLoading, error } = useQuery('courses', getCourses);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    else if (error) {
        return <p>An error occurred: {error.message}</p>;
    }
    const columns = [
        { label: 'Title', field: 'title' },
        { label: 'Decipline', field: 'dicipline' },
        { label: 'Class', field: 'class' },
        { label: 'Price', field: 'price' },
        { label: 'Instructor', field: 'instructor' },
        { label: 'Level', field: 'level' },
        { label: 'Views', field: 'views_number' },
            { label: 'Status', field: 'status' },
        ]; 
        
        /*Les données des tableaux level laguage description*/
                  /****** */
    const data = courses.map((course) => ({
        title: course.titre,
        dicipline:  course.discipline_name, // Remplacez par la logique appropriée pour récupérer la discipline
        class: course.classe_name, // Remplacez par la logique appropriée pour récupérer la classe
        price: course.price,
        instructor:  course.instructor_name, // Remplacez par la logique appropriée pour récupérer l'instructeur
        level: course.nivaeu,
        views_number: course.views_number,
        status: [{ name: course.status, class: course.status =='refusé'?'btn_red': 'btn_green' }],
    }));
                  
    return (
        <>
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} links={links} />
            <Table columns={columns} data={data} />
            
        </>
    );
}

export default Courses;