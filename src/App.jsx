import RootLayout from "./layout/RootLayout"
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home"

function App() {

  return (

    <div>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
