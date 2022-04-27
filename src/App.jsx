import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";


import Movie from "./pages/movie";

function App() {
    
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route exact path="https://vocal-pudding-374eaf.netlify.app/movie/:movie_id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
