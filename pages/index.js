/*
  Copyright (c) 2023 J. Krajewski and released under the MIT license.
*/

import Chatbot from "../components/Chatbot";

function Home() {
  return (
    <div className="h-screen">
      <h1>Minimal streaming chatbot example!</h1>
      <Chatbot />
    </div>
  );
}

export default Home;
