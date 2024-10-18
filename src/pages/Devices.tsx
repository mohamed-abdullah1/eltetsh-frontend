import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banknote, CircleUserRound, HandCoins } from "lucide-react";

const devices = [
  {
    id: 1,
    code: "#P_1",
    status: "available",
    singlePrice: 15,
    multiPrice: 25,
    client: {
      name: "Mohamed elsayed",
    },
  },
  {
    id: 2,
    code: "#P_2",
    status: "busy",
    singlePrice: 15,
    multiPrice: 25,
    client: {
      name: "Sam elon",
    },
  },
  {
    id: 3,
    code: "#P_3",
    status: "busy",
    singlePrice: 15,
    multiPrice: 25,
    client: {
      name: "John Whick",
    },
  },
  {
    id: 4,
    code: "#P_4",
    status: "busy",
    singlePrice: 15,
    multiPrice: 25,
    client: {
      name: "Mohamed",
    },
  },
  {
    id: 5,
    code: "#P_5",
    status: "available",
    singlePrice: 15,
    multiPrice: 25,
    client: {
      name: "Mohamed",
    },
  },
  {
    id: 6,
    code: "#P_6",
    status: "busy",
    singlePrice: 15,
    multiPrice: 25,
    client: {
      name: "Mohamed",
    },
  },
];

function Devices() {
  return (
    <div>
      <h1 className="text-xl text-primary inter-font px-4">Devices</h1>
      {/* devices */}
      <div className="flex flex-col gap-4 h-full overflow-scroll px-2 py-6">
        {devices.map((device) => (
          <Card className="w-full " key={device.id}>
            <CardHeader>
              <CardTitle className="text-2xl">{device.code}</CardTitle>
              {/* <CardDescription> */}
            </CardHeader>
            <CardContent>
              {/*  */}
              <div className="flex flex-wrap gap-2 text-sm">
                <div className="flex gap-2 items-center text-muted-foreground bg-secondary p-2 rounded-full">
                  <Banknote className="w-4 h-4 " />
                  <p>{device.singlePrice + " EGP/Hour"}</p>
                </div>
                <div className="flex gap-2 items-center text-muted-foreground bg-secondary p-2 rounded-full">
                  <Banknote className="w-4 h-4 " />
                  <p>{device.multiPrice + " EGP/Hour"}</p>
                </div>
              </div>
              {device.status === "busy" && (
                <div className="flex gap-2 py-4 text-sm items-center">
                  <CircleUserRound className="w-4 h-4" />
                  <p>Play by ${device?.client?.name}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge
                variant="default"
                className={`
                text-primary
                ${
                  device.status === "available" ? "bg-green-600" : "bg-red-500"
                }`}
              >
                {device.status}
              </Badge>
              <Button
                variant={device.status === "available" ? "default" : "outline"}
              >
                {device.status === "available" ? "Book" : "View"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Devices;
