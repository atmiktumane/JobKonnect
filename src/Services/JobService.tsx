import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

// POST API : Post Job
const postJobAPI = async (job: any) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/jobs/post-job`, job);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    } else {
      console.error("An unexpected error occurred : ", error);
    }
  }
};

// GET ALL API : Get all jobs
const getAllJobsAPI = async () => {
  try {
    // API Call
    const response = await axios.get(`${apiUrl}/api/v1/jobs/all-jobs`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    } else {
      console.error("An unexpected error occurred : ", error);
    }
  }
};

// GET BY ID API : Get job by id
const getJobByIDAPI = async (id: any) => {
  try {
    // API Call
    const response = await axios.get(`${apiUrl}/api/v1/jobs/${id}`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    } else {
      console.error("An unexpected error occurred : ", error);
    }
  }
};

// POST API : Post Job
const applyJobAPI = async (id: any, applicant: any) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/jobs/apply/${id}`,
      applicant
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    } else {
      console.error("An unexpected error occurred : ", error);
    }
  }
};

export { postJobAPI, getAllJobsAPI, getJobByIDAPI, applyJobAPI };
