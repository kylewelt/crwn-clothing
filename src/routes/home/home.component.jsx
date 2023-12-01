import Directory from "../../components/directory/directory.component";

import CATEGORIES from "../../categories.json";

const Home = () => {
  return <Directory categories={CATEGORIES} />;
};

export default Home;
