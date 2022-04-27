import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

import Movie from "./pages/movie";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="movie/:movie_id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
