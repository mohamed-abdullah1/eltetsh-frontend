// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Settings from "./pages/settings";
import Clients from "./pages/clients";
import Invoices from "./pages/Invoices";
import { ThemeProvider } from "@/components/theme-provider";
import Devices from "./pages/Devices";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* The Layout wraps these routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Devices />} /> {/* default route */}
            <Route path="invoices" element={<Invoices />} />
            <Route path="clients" element={<Clients />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
