import { AllStudentTable } from "./components/AllStudentTable";
import { Main } from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UpdateForm } from "./components/UpdateForm";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/all" element={<AllStudentTable />} />
        <Route path="/update/:id" element={<UpdateForm  />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
