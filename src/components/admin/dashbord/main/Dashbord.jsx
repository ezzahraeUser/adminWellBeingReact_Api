import { useQuery } from 'react-query';
import {  fetchDashboardData, token, userData } from '../../../../api/api__admin';

function Dashbord() {
  const { data: dashboardData, isLoading, error } = useQuery('dashboardData', fetchDashboardData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  else if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

    const cards = [
        {icone:'bi bi-people'    ,                number: dashboardData.total_Clients    ,     title:'Total Students'},
        {icone:'bi bi-book'    ,                  number: dashboardData.total_Course    ,      title:'Total Courses'},
        {icone:'bi bi-people'    ,                number: dashboardData.total_Instructors   ,  title:'Total Instructors'},
        {icone:'bi bi-film'    ,                  number: dashboardData.total_Packs    ,       title:'total_Packs'},
        {icone:'bi bi-gear-wide-connected'    ,   number: dashboardData.total_discipline    ,  title:'Desciplines'},
        {icone:'bi bi-diagram-3'    ,             number: dashboardData.total_classes    ,     title:'Classes'},
        {icone:'bi bi-hourglass-split '    ,      number: dashboardData.pending_courses    ,   title:'pending_courses'},
        {icone:'bi bi-eye'    ,                   number: dashboardData.total_courses_view   , title:'total_courses_view'},
        {icone:'bi bi-hourglass-split'    ,       number: dashboardData.pending_packs    ,     title:'pending_packs'},
        {icone:'bi bi-eye'    ,                   number: dashboardData.total_packs_view    ,  title:'total_packs_view'},
        {icone:'bi bi-eye'    ,                   number: dashboardData.total_view    ,        title:'total_view'},

        {icone:'bi bi-cart-check',number: dashboardData.total_Clients,title:'Total Sale'},
        {icone:'bi bi-film',number: dashboardData.total_Clients,title:'Course Video'},/* 
        {icone:'bi bi-camera-reels',number: dashboardData.total_Clients,title:'Course Live'},
        */

    ]
 

    return (
    <div className="dashboard-container">
        {cards.map((card , index) => (
            <div className="card" key={index}>
                <div className="card-icon"><i className={"icone_dashbord"+card.icone} ></i></div>
                <div className="card-number">{card.number}</div>
                <div className="card-title">{card.title}</div>
            </div>
            
        ))}
          <div>



    </div>
              
    </div>
    );
}

export default Dashbord;