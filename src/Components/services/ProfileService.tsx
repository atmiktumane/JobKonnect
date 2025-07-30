import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const getProfileByIdAPI = async (profileId: string) => {
  try {
    // API Call
    const response = await axios.get(
      `${apiUrl}/api/v1/profiles/details/${profileId}`
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

const updateProfileAPI = async (profile: any) => {
  try {
    const response = await axios.put(
      `${apiUrl}/api/v1/profiles/update`,
      profile
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

export { getProfileByIdAPI, updateProfileAPI };
