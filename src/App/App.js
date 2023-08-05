import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../Home/home'
import About from '../About/about'
import Contact from '../Contact/contact'
import Layout from '../Layout/layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter> 
  );
}

export default App;
