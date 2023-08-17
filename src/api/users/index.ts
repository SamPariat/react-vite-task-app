import { AxiosError } from "axios";

import { axiosInstance } from "../axios";
import { User } from "./types";

type UserResponse = {
  user: User;
  token: string;
};

type UpdateType = {
  name?: string;
  email?: string;
  password?: string;
  age?: unknown;
};

export const signup = async (user: User): Promise<UserResponse> => {
  try {
    // Remove unused fields from the request body
    delete user.profileImage;
    delete user.tokens;

    const response = await axiosInstance.post("/users", user, {
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

export const login = async (
  email: string,
  password: string
): Promise<UserResponse> => {
  try {
    const response = await axiosInstance.post(
      "/users/login",
      {
        email,
        password,
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

export const logout = async (): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      "/users/logout",
      {},
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

export const logoutAllAccounts = async (): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      "/users/logout-all",
      {},
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

export const getProfile = async (): Promise<UserResponse> => {
  try {
    const response = await axiosInstance.get("/users/me", {
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

export const updateAccount = async (
  updates: UpdateType
): Promise<UserResponse> => {
  for (const update in updates) {
    if (updates[update as keyof UpdateType] === undefined) {
      delete updates[update as keyof UpdateType];
    }
  }

  try {
    const response = await axiosInstance.patch("/users/me", updates, {
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

export const deleteAccount = async (): Promise<UserResponse> => {
  try {
    const response = await axiosInstance.delete("/users/me", {
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

export const uploadProfileImage = async (formData: FormData): Promise<void> => {
  try {
    const response = await axiosInstance.post(
      "/users/me/profile-img",
      formData,
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

export const deleteProfileImage = async (): Promise<void> => {
  try {
    const response = await axiosInstance.delete("/users/me/profile-img", {
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
