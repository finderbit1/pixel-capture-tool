import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import TagFilter from "@/components/TagFilter";
import VideoCard from "@/components/VideoCard";
import Sidebar from "@/components/Sidebar";

// Import thumbnails
import techThumbnail from "@/assets/tech-review-thumbnail.jpg";
import gamingThumbnail from "@/assets/gaming-thumbnail.jpg";
import musicThumbnail from "@/assets/music-thumbnail.jpg";
import comedyThumbnail from "@/assets/comedy-thumbnail.jpg";
import educationThumbnail from "@/assets/education-thumbnail.jpg";
import sportsThumbnail from "@/assets/sports-thumbnail.jpg";

const videoData = [
  {
    title: "Análise completa do iPhone 15 Pro - Vale a pena o upgrade?",
    thumbnail: techThumbnail,
    duration: "12:45",
    views: "1.2M",
    channel: "TechReview Brasil",
    verified: true
  },
  {
    title: "Os melhores jogos de 2024 - Top 10 que você precisa jogar",
    thumbnail: gamingThumbnail,
    duration: "18:32",
    views: "890K",
    channel: "GameWorld",
    verified: true
  },
  {
    title: "Como produzir música eletrônica em casa - Tutorial completo",
    thumbnail: musicThumbnail,
    duration: "25:16",
    views: "456K",
    channel: "MusicHub",
    verified: false
  },
  {
    title: "Stand-up comedy brasileiro - Os melhores momentos de 2024",
    thumbnail: comedyThumbnail,
    duration: "8:23",
    views: "2.1M",
    channel: "Comedy Central Brasil",
    verified: true
  },
  {
    title: "Matemática descomplicada - Equações do 2º grau explicadas",
    thumbnail: educationThumbnail,
    duration: "15:47",
    views: "678K",
    channel: "Educação Online",
    verified: true
  },
  {
    title: "Melhores jogadas do Campeonato Brasileiro 2024",
    thumbnail: sportsThumbnail,
    duration: "6:15",
    views: "3.2M",
    channel: "Futebol TV",
    verified: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <TagFilter />
      
      <div className="container mx-auto px-4 py-6">
        {/* Section Header */}
        <div className="flex items-center space-x-2 mb-6">
          <h2 className="text-xl font-semibold text-foreground">Vídeos em Alta - Brasil</h2>
          <span className="text-primary">🔥</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videoData.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="flex justify-center mt-8">
              <button className="px-6 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors">
                Carregar mais vídeos
              </button>
            </div>
          </div>
          
          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
