import { useSystemTheme } from "./hooks/useSystemTheme";
import Layout from "./layout/Layout";

function App() {
  useSystemTheme();
  return (
    <div className="container">
      <Layout>
        <div className="children">Children</div>
      </Layout>
    </div>
  );
}

export default App;
