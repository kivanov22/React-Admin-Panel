import Home from "./pages/home/Home.js";
import List from "./pages/list/List.js";
import Login from "./pages/login/Login.js";
import New from "./pages/new/New.js";
import Single from "./pages/single/Single.js";
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/users">
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single />}/>
            <Route path="new" element={<New />}/>
          </Route>
          <Route  path="/products">
            <Route index element={<List />}/>
            <Route path=":productId" element={<Single />}/>
            <Route path="new" element={<New />}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
