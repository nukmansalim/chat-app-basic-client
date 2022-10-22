import { Routes, Route } from "react-router-dom";
import { Register, Login, Landing } from "./pages";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { ProtectedRoute } from "./utils/helpers/RouteProtector";
import "./app.css"
import Dashboard from "./pages/dashboard";
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path='/' element={<Landing />} />
          <Route path='/register' element={
            <ProtectedRoute>

              <Register />
            </ProtectedRoute>

          } />
          <Route path='/login' element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>

          } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
