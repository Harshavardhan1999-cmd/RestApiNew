// import "./App.css";
// import RandomButton from "/home/chandu/Restapiproj/vite-project/components/RandomButton"

// function App() {
//   return (
//     <>
//       <h1>Bible Verse Generator</h1>
//       <RandomButton/>
//     </>
//   );
// };

// export default App;

import "./App.css";
import RandomButton from "/home/chandu/Restapiproj/vite-project/components/RandomButton";
import RetrievalButton from "/home/chandu/Restapiproj/vite-project/components/RetrievalButton"; // Import new component

function App() {
  return (
    <>
      <h1>Bible Verse Generator</h1>
      <RandomButton />
      <RetrievalButton /> {/* Add the new component */}
    </>
  );
};

export default App;
