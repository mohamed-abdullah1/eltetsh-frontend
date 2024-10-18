// Layout.js
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

function Layout() {
  return (
    <div>
      {/* Top bar stays at the top of every page */}
      <TopBar />

      {/* Main content area where routes will be rendered */}
      <main className="mb-[90px]">
        <section className="px-2 py-2">
          <Outlet /> {/* Outlet renders the matched child route */}
        </section>
      </main>

      {/* Bottom bar stays at the bottom of every page */}
      <BottomBar />
    </div>
  );
}

export default Layout;
