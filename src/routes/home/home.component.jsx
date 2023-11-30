import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = require("../../categories.json");

  return <Directory categories={categories} />;
};

export default Home;
