import axios from 'axios';
export let token = localStorage.getItem("token");
export let userData = JSON.parse(localStorage.getItem("userData"));

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 5000,
  withCredentials: true,
});
/*************Authentification************ */

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
setAuthToken(token);
export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    if (response.data && response.data.data) {
      const newUserData = response.data.data;
      const newToken = newUserData.token;
      localStorage.setItem("token", newToken);
      localStorage.setItem("userData", JSON.stringify(newUserData));
      token = newToken;
      if (localStorage.getItem("userData")) {
        userData = JSON.parse(localStorage.getItem("userData"));
      } else {
        userData = null;
      }
      setAuthToken(newToken); // Mettre à jour l'en-tête avec le nouveau token  
    } else {
      throw new Error('Invalid response data');
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response.data);
    throw new Error(error.response.data.message);
  } 
};


export const Logout = async () => {
  try {
    token = null;
    userData = null
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    setAuthToken(null); // Supprimer l'en-tête d'autorisation
    console.log("Déconnecté"+token);
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
/******************Page Dashbord***************** */
export const fetchDashboardData = async () => {
  try {
    const response = await api.get('/admin/dashbord');
    return response.data;
  } catch (error) {

    console.error('Failed to fetch dashboard data:', response.data);
    throw error;
  }
};
/********************Page Discipline********************** */

export const addDiscipline = async (discipline) => {
  try {
    const formData = new FormData();
    
    // Ajoutez les autres informations en tant que chaînes de caractères
    formData.append('titre', discipline.titre);
    formData.append('discipline_description', discipline.discipline_description);
    
    // Ajoutez l'image comme un fichier
    formData.append('background_img', discipline.background_img);
    
    const response = await api.post('/admin/create-discipline', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la discipline :', error);
    throw error;
  }
};


export const updateDiscipline = async (id,discipline) => {
  try {
    const response = await api.put(`/admin/discipline/${id}/edit`,discipline);
    return response.data;
  } catch (error) {
    console.error('Failed to update discipline:', error);
    throw error;
  }
};
export const deleteDiscipline = async (id,discipline) => {
  try {
    const response = await api.delete(`/admin/discipline/${id}/delete`,discipline);
    return response.data;
  } catch (error) {
    console.error('Failed to delete discipline:', error);
    throw error;
  }
};
export const fetchDisciplines = async () => {
  try {
    const response = await api.get('/admin/disciplines');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch disciplines:', error);
    throw error;
  }
};
export const fetchDisciplineDetails = async (id) => {
  try {
    const response = await api.get(`/admin/discipline/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch discipline:', error);
    throw error;
  }
};
export const addClass = async (id , classe) => {
  try {
    const c = {
      titre: "Yoga_Flamingo_Class_2",
      classe_description: "classe_description2"
    }
    const response = await api.post(`/admin/discipline/${id}/create-classe`,classe);
    return response.data;
  } catch (error) {
    console.error('Failed to add classe:', error);
    throw error;
  }
};
export const updateClass = async (id,classe) => {
  try {
    const response = await api.put(`/admin/classe/${id}/edit`,classe);
    console.log("Bien Edité")
    return response.data;
  } catch (error) {
    console.error('Failed to update discipline:', error);
    throw error;
  }
};
export const deleteClass = async (id) => {
  try {
    const response = await api.delete(`/admin/classe/${id}/delete`);
    console.log("Bien Supprimé")
    return response.data;
  } catch (error) {
    console.error('Failed to delete classe:', error);
    throw error;
  }
};
/***************Courses******************* */
export const getPendingCourses = async () => {
  try {
    const response = await api.get('/admin/courses/pending-courses');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    throw error;
  }
};
export const approuveCourse = async (id ) => {
  try {

    const response = await api.post(`admin/course/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error('Failed to add classe:', error);
    throw error;
  }
};
export const refuseCourse = async (id ) => {
  try {

    const response = await api.post(`admin/course/${id}/refuse`);
    return response.data;
  } catch (error) {
    console.error('Failed to add classe:', error);
    throw error;
  }
};
export const getCourses = async () => {
  try {
    const response = await api.get('/admin/courses');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    throw error;
  }
};
export const getPacks = async () => {
  try {
    const response = await api.get('/admin/packs');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Failed to fetch packs:', error);
    throw error;
  }
};
export const getPendingPacks = async () => {
  try {
    const response = await api.get('/admin/packs/pending-packs');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch packs:', error);
    throw error;
  }
};


export const approuvePack = async (id ) => {
  try {

    const response = await api.post(`admin/packs/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error('Failed to add classe:', error);
    throw error;
  }
};
export const refusePack = async (id ) => {
  try {

    const response = await api.post(`admin/packs/${id}/refuse`);
    return response.data;
  } catch (error) {
    console.error('Failed to add classe:', error);
    throw error;
  }
};

/**Page Instructors */
export const getInstructors = async () => {
  try {
    const response = await api.get('/admin/instructors');
    return response.data.instructors;
  } catch (error) {
    console.error('Failed to fetch instructors:', error);
    throw error;
  }
};

export const activateInstructor = async (id ) => {
  try {

    const response = await api.post(`admin/instructors/${id}/activate-instructor`);
    return response.data;
  } catch (error) {
    console.error('Failed to activate instructor:', error);
    throw error;
  }
};
export const desactivateInstructor = async (id ) => {
  try {

    const response = await api.post(`admin/instructors/${id}/desactivate-instructor`);
    return response.data;
  } catch (error) {
    console.error('Failed to desactivate instructor:', error);
    throw error;
  }
};

export default api;
