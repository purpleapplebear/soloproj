import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function MyRouter() {
  return (
        <BrowserRouter>
        <>
        <Routes>
          <Route path="/" element={<nav><Link to="/">a</Link><Outlet /></nav>} />
          <Route path="a" element={<h1>Hello: Page 2</h1>} />
          <Route path="b" element={<h1>Hello: Page 3</h1>} />

        </Routes>
        </>
      </BrowserRouter>
    

  );
}

export default MyRouter;
