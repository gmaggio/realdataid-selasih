import axios from "axios";

export const handleServiceError = (error: unknown, description?: string) => {
  if (axios.isAxiosError(error)) {
    const errorMessage = error.response?.data?.message || error.message;
    const message = `Failed to ${description ? description : "fetch data"}: ` +
      `${errorMessage}`;
    console.error(message);
    throw new Error(message);
  } else {
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred.");
  }
};
