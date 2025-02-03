import axios from "axios";

export const handleServiceError = (error: unknown, entityName?: string) => {
  if (axios.isAxiosError(error)) {
    const errorMessage = error.response?.data?.message || error.message;
    const entity = entityName ? entityName : "data";
    const message = `Failed to fetch ${entity}: ${errorMessage}`;
    console.error(message);
    throw new Error(message);
  } else {
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred.");
  }
};
