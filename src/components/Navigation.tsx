import { Button } from "@/components/ui/button";

const navigationItems = [
  "PÁGINA PRINCIPAL",
  "VÍDEOS",
  "CATEGORIAS", 
  "AO VIVO",
  "CANAIS",
  "TRENDING",
  "COMUNIDADE",
  "FOTOS"
];

const Navigation = () => {
  return (
    <nav className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-2">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`whitespace-nowrap text-sm hover:text-primary ${
                index === 0 ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;