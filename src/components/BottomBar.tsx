// BottomBar.js

import {
  Gamepad,
  Gamepad2,
  NotepadText,
  Plus,
  Settings,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
// import { Button } from "./ui/button";

const Items = [
  {
    id: 1,
    title: "Devices",
    to: "/",
    icon: <Gamepad2 style={{ width: 20, height: 20 }} />,
    activeIcon: <Gamepad style={{ width: 20, height: 20 }} />,
  },
  {
    id: 2,
    title: "Invoices",
    to: "/invoices",
    icon: <NotepadText style={{ width: 20, height: 20 }} />,
    activeIcon: <NotepadText style={{ width: 20, height: 20 }} />,
  },

  {
    id: 3,
    to: "/clients",
    title: "clients",
    icon: <User style={{ width: 20, height: 20 }} />,
    activeIcon: <User style={{ width: 20, height: 20 }} />,
  },
  {
    id: 4,
    to: "/settings",
    title: "settings",
    icon: <Settings style={{ width: 20, height: 20 }} />,
    activeIcon: <Settings style={{ width: 20, height: 20 }} />,
  },
];

function BottomBar() {
  const location = useLocation(); // Get the current location
  const currentPath = location.pathname; // Get the current pathname
  console.log("🔥✨ ", currentPath);

  return (
    <footer className="h-[90px] p-2  text-primary fixed bottom-0 w-full pb-6 bg-primary-foreground">
      <div className="flex items-center justify-between px-4">
        {Items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Link to={item.to} className="cursor-pointer text-foreground">
              <Button
                variant={"ghost"}
                className={`
                  flex flex-col
                  h-full
                ${
                  currentPath === item.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {currentPath === item.to ? item.activeIcon : item.icon}
                <div className="text-xs text-primary">{item.title}</div>
              </Button>
            </Link>
          </div>
        ))}
        {/* <div className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute right-0 transform -translate-x-1/2 -translate-y-16 rounded-full bg-primary p-4 flex items-center justify-center transition-all duration-100 ease-in-out active:scale-80 active:bg-secondary  cursor-pointer">
          <Plus
            className="text-primary hover:text-foreground w-full"
            style={{ width: 20, height: 20 }}
          />
        </div> */}
      </div>
    </footer>
  );
}

export default BottomBar;
