import { Route, Routes } from "react-router-dom";
import AddContractForm from "./components/contract/AddContractForm";
import Layout from "./layout/Layout"

function App() {
  return (
  
      <div>
          <Layout />
          <Routes>
            
                <Route path='/contract' element={<AddContractForm />} />
            
          </Routes>
      </div>
      

           
      
    
    
  );
}

export default App;
