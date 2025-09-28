import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80">
      <div className="sticky top-4 space-y-4">
        {/* Ad Banner */}
        <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/20">
          <CardContent className="p-6 text-center">
            <div className="bg-primary/20 rounded-lg p-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AD</span>
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Anúncio Premium
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Descubra conteúdo exclusivo e recursos premium
            </p>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Saiba Mais
            </Button>
          </CardContent>
        </Card>

        {/* Popular Channels */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Canais Populares</h3>
            <div className="space-y-3">
              {[
                { name: "TechReview", subscribers: "1.2M", verified: true },
                { name: "GameWorld", subscribers: "890K", verified: true },
                { name: "MusicHub", subscribers: "2.1M", verified: false },
                { name: "Comedy Central", subscribers: "3.5M", verified: true }
              ].map((channel, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary-foreground">
                      {channel.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium text-foreground">
                        {channel.name}
                      </span>
                      {channel.verified && (
                        <span className="text-primary text-xs">✓</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {channel.subscribers} inscritos
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default Sidebar;