import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tags = [
  "em alta",
  "gaming",
  "música",
  "tecnologia", 
  "comédia",
  "educação",
  "esportes",
  "filme completo",
  "documentário",
  "tutorial",
  "livestream",
  "entrevista"
];

const TagFilter = () => {
  return (
    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-1">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            {tags.map((tag, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                size="sm"
                className={`whitespace-nowrap text-xs px-3 py-1 ${
                  index === 0 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
          
          <Button variant="ghost" size="sm" className="p-1">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TagFilter;