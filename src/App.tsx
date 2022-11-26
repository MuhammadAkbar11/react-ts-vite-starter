import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div className="box">
      <h1>Vite, React, Typescript and TailwindCss Starter</h1>
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
