# Langchain Chatbot with Real-Time Data Streaming using Next.js

This project demonstrates how to build a chatbot that integrates Langchain, ChatGpt, and Next.js to stream real-time data from the backend to the frontend. Styles are [Tailwind css](https://tailwindcss.com)

## Installation

1. Clone the repository:
```
git clone https://github.com/username/repo.git
```

2. Install dependencies:
```
cd repo
npm install -S langchain

```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=YOUR_API_KEY
```

## Usage

1. Start the development server:
```
npm run dev
```

2. Navigate to `http://localhost:3000` in your browser.

3. Click the "Start Stream" button to initiate the chatbot stream.

## Technologies

- [LangchainJS](https://github.com/hwchase17/langchainjs) for LLM chains
- [ChatGpt](https://platform.openai.com/docs/guides/chat) using the 'gpt-3.5-turbo' model.
- [Next.js](https://nextjs.org/) for server-side rendering and real-time updates

## Credits

Jake Krajewski 2023.
This project was inspired by [Langchain's example code](https://hwchase17.github.io/langchainjs/docs/modules/chat_models/examples/streaming/) and being unable to find a solution anywhere.
