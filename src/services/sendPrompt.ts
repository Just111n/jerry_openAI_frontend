import axios from "axios";

const sendPrompt = async (message: string): Promise<{ response: string }> => {
  const response = await axios.post("http://localhost:8000/chat", {
    message: message,
  });
  return response.data;
};

export default sendPrompt;
