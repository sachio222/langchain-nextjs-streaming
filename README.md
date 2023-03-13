# Langchain Chatbot with Real-Time Data Streaming using Next.js

This project demonstrates how to minimally achieve live streaming with Langchain, ChatGpt, and Next.js to get real-time data from the backend to the frontend.

## Installation

1. Copy files from repository into your project (do not clone repo, is not stand-alone):
```
https://github.com/sachio222/langchain-nextjs-streaming.git
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

2. Navigate to `http://localhost:3000` in your browser. index.js will automatically run.

3. Click the "Start Stream" button to initiate the chatbot stream.

## Technologies

- [LangchainJS](https://github.com/hwchase17/langchainjs) for LLM chains
- [ChatGpt](https://platform.openai.com/docs/guides/chat) using the 'gpt-3.5-turbo' model.
- [Next.js](https://nextjs.org/) for server-side rendering and real-time updates
- [Tailwind css](https://tailwindcss.com) for minimal styling.

## Credits

Copyright (c) 2023 J. Krajewski and released under the MIT license.
This project was inspired by [Langchain's example code](https://hwchase17.github.io/langchainjs/docs/modules/chat_models/examples/streaming/) and being unable to find a solution anywhere.
