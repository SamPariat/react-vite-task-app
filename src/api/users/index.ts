import { axiosInstance } from "../axios";
import { User } from "./types";

type UserResponse = {
  user: User;
  token: string;
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
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error();
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
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error();
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
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error();
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
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error();
  }
};

export const getProfile = async (): Promise<UserResponse> => {
  try {
    const response = await axiosInstance.get("/users/me", {
      withCredentials: true,
    });

    return response.data;
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error();
  }
};

export const updateAccount = async () => {
  try {
  } catch (e) {}
};

export const deleteAccount = async () => {
  try {
  } catch (e) {}
};

export const uploadProfileImage = async () => {
  try {
  } catch (e) {}
};

export const deleteProfileImage = async () => {
  try {
  } catch (e) {}
};
