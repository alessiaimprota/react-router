//importo gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importo componenti
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* importo qua poi le singole pagine e i loro percorsi di navigaizone */}
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={Products} />
        <Route path="/aboutus" Component={AboutUs} />
      </Routes>
    </BrowserRouter>
  );
}
