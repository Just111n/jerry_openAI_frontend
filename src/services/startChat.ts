async function startChat(message: string, updateMessages) {
  try {
    const response = await fetch("http://localhost:8000/chat-stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.body) throw new Error("No response body");

    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      console.log("Received:", value);
      updateMessages(value); // Callback to update messages in the component state
    }
  } catch (error) {
    console.error("Error starting chat:", error);
  }
}

export default startChat;
