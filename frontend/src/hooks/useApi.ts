import { useCallback } from 'react';
import api from '../utils/api';

const useApi = () => {
  const get = useCallback(async <T>(url: string) => {
    try {
      const response = await api.get<T>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  const post = useCallback(async <T>(url: string, data: any) => {
    try {
      const response = await api.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);
  const put = useCallback(async <T>(url: string, data: any) => {
    try {
      const response = await api.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);
  const deleteRequest = useCallback(async <T>(url: string) => {
    try {
      const response = await api.delete<T>(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  return { get, post, put, deleteRequest };
};

export default useApi;
