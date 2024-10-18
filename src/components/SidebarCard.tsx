type props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const SidebarCard: React.FC<props> = ({ icon, title, value }) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        style={{
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="font-inter text-muted-foreground">{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default SidebarCard;
