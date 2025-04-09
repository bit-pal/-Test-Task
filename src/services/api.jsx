import axios from "axios";

const API_BASE_URL = "https://test-task-api.allfuneral.com";

export const getAuthToken = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/auth`, {
    params: { user: username },
  });
  return response.headers.authorization.split(" ")[1];
};

export const fetchOrganization = async (id, token) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateOrganization = async (id, data, token) => {
  const response = await axios.patch(`${API_BASE_URL}/companies/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteOrganization = async (id, token) => {
  await axios.delete(`${API_BASE_URL}/companies/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const uploadImage = async (id, file, token) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_BASE_URL}/companies/${id}/image`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteImage = async (id, imageName, token) => {
  await axios.delete(`${API_BASE_URL}/companies/${id}/image/${imageName}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const fetchContact = async (id, token) => {
  const response = await axios.get(`${API_BASE_URL}/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response.data)
  return response.data;
};

export const updateContact = async (id, data, token) => {
  const response = await axios.patch(`${API_BASE_URL}/contacts/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};