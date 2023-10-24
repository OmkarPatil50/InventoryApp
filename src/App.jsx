import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Pages/Landing/Landing";
import { DepartmentsPage } from "./Pages/Departments/DepartmentsPage";
import { ProductsPage } from "./Pages/Products/ProductsPage";
import { IndividualProductPage } from "./Pages/IndividualProduct/IndividualProductPage";
import { NewProductPage } from "./Pages/NewProduct/NewProductPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:productID"
          element={<IndividualProductPage />}
        />
        <Route path="/new" element={<NewProductPage />} />
      </Routes>
    </div>
  );
}
