import { AxiosError } from "axios";

import { axiosInstance } from "../axios";
import type { Task } from "./types";

export const createNewTask = async (
  description: string,
  completed: boolean
): Promise<Task> => {
  try {
    const response = await axiosInstance.post(
      "/tasks",
      {
        description,
        completed,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new AxiosError(e.message);
    }
    throw new AxiosError();
  }
};

export const getTasks = async (url: string): Promise<Array<Task>> => {
  try {
    const response = await axiosInstance.get(url, {
      withCredentials: true,
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new AxiosError(e.message);
    }
    throw new AxiosError();
  }
};

export const getTaskById = async (taskId: string): Promise<Task | null> => {
  try {
    const response = await axiosInstance.get(`/tasks/${taskId}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new AxiosError(e.message);
    }
    throw new AxiosError();
  }
};

export const updateTask = async (
  taskId: string,
  body: { description?: string; completed?: boolean }
): Promise<Task | null> => {
  try {
    const response = await axiosInstance.patch(`/tasks/${taskId}`, body, {
      withCredentials: true,
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new AxiosError(e.message);
    }
    throw new AxiosError();
  }
};

export const deleteTask = async (taskId: string): Promise<Task | null> => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new AxiosError(e.message);
    }
    throw new AxiosError();
  }
};
