import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = require("./categories.json");

  return <Directory categories={categories} />;
};

export default App;
