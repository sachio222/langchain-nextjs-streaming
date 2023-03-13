import { useState } from "react";

function Chatbot() {
  const [chatMessages, setChatMessages] = useState([]);

  const handleButtonClick = async () => {
    setChatMessages([]);

    const response = await fetch("/api/streamDemo");
    const stream = response.body;
    const reader = stream.getReader();

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        const decodedValue = new TextDecoder().decode(value);
        setChatMessages((prevMessages) => [...prevMessages, decodedValue]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      reader.releaseLock();
    }
  };

  return (
    <>
      <button
        className="text-lg font-bold text-slate-500"
        onClick={handleButtonClick}
      >
        Start Stream
      </button>
      <ul>{chatMessages && chatMessages}</ul>
    </>
  );
}

export default Chatbot;
