// TopBar.js

import {
  HandCoins,
  Menu,
  MoonStar,
  PersonStanding,
  Pyramid,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useTheme } from "./theme-provider";
import SidebarCard from "./SidebarCard";

function TopBar() {
  const { setTheme } = useTheme();

  return (
    <header className="py-4 px-2 w-full flex justify-between ">
      <Link
        to="/"
        className="text-xl text-pretty inter-font flex gap-2 items-center flex-row-reverse"
      >
        <div>
          <Pyramid />
        </div>
        <h1>El Tetsh</h1>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-full min-h-full" side={"left"}>
          <SheetHeader>
            <SheetTitle className=" flex gap-4 items-center">
              {/* Image */}
              <Avatar style={{ width: 50, height: 50 }}>
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              {/* name */}
              <div className="text-start text-sm font-medium">
                <p className="text-muted-foreground">Hello,</p>
                <p>Momen Ahmed</p>
              </div>
            </SheetTitle>
          </SheetHeader>

          <SheetFooter className="py-6 flex flex-col gap-4">
            <h1 className="text-sm font-inter  text-muted-foreground">
              Today Analytics -{" "}
              {new Intl.DateTimeFormat("en-GB", {
                weekday: "short", // Mon
                day: "numeric", // 17
                month: "short", // Oct
                year: "numeric", // 2024
              }).format(new Date())}
            </h1>
            <div className="h-[0.5px] w-full bg-muted-foreground"></div>
            {/* information about today */}
            <SidebarCard
              title="Collected Money"
              icon={<HandCoins />}
              value="100 EGP"
            />
            <SidebarCard
              title="Clients Count"
              icon={<PersonStanding />}
              value="8 Clients"
            />
          </SheetFooter>
          <div className="fixed bottom-4 left-4">
            <Drawer>
              <DrawerTrigger asChild>
                <SheetClose asChild>
                  <Button variant="outline" className="rounded-full w-12 h-12">
                    <MoonStar style={{ width: 20, height: 20 }} />
                  </Button>
                </SheetClose>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader className="text-start">
                    <DrawerTitle className="py-6">Choose Mode</DrawerTitle>
                    <DrawerDescription>
                      <RadioGroup
                        defaultValue="comfortable"
                        className="flex gap-6 flex-col"
                      >
                        <div
                          className="flex items-between gap-4 font-inter space-x-2"
                          onClick={() => setTheme("system")}
                        >
                          <RadioGroupItem value="system" id="r1" />
                          <Label htmlFor="r1">System</Label>
                        </div>
                        <div
                          className="flex items-between gap-4 font-inter space-x-2"
                          onClick={() => setTheme("light")}
                        >
                          <RadioGroupItem value="light" id="r2" />
                          <Label htmlFor="r2">Light</Label>
                        </div>
                        <div
                          className="flex items-between gap-4 font-inter space-x-2"
                          onClick={() => setTheme("dark")}
                        >
                          <RadioGroupItem value="dark" id="r3" />
                          <Label htmlFor="r3">Dark</Label>
                        </div>
                      </RadioGroup>
                    </DrawerDescription>
                  </DrawerHeader>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default TopBar;
