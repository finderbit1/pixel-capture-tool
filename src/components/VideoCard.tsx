import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Eye, MoreVertical } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  channel: string;
  verified?: boolean;
}

const VideoCard = ({ title, thumbnail, duration, views, channel, verified }: VideoCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-200 group cursor-pointer">
      <CardContent className="p-0">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          
          {/* Duration */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
            {duration}
          </div>
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-200">
            <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                {title}
              </h3>
              
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className="flex items-center">
                  {channel}
                  {verified && <span className="text-primary ml-1">✓</span>}
                </span>
              </div>
              
              <div className="flex items-center space-x-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {views}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  2 dias atrás
                </span>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="p-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;