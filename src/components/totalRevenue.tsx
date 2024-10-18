import { Button } from "./ui/button";

const TotalRevenue = () => {
  return (
    <Button className="bg-primary rounded-e-2xl">
      <div className="h-4 w-4 bg-gradient-to-r from-green-400  to-green-600 rounded-full"></div>
      <p className="inter-font font-medium">300 EGP</p>
    </Button>
  );
};

export default TotalRevenue;
