import { PodiumCard } from "@/components/PodiumCard";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { PodiumCardSkeleton, LeaderboardRowSkeleton } from "@/components/EnhancedSkeleton";
import { NetworkErrorDisplay, ErrorBoundary } from "@/components/ErrorBoundary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RefreshCw, TrendingUp, Users, Clock, Radio, Zap, Sword } from "lucide-react";
import { Link } from "react-router-dom";
import rainLogo from "@/assets/rain.png";
import clashLogo from "@/assets/rustclash-banner.png";

const Index = () => {
  const { data, isLoading, error, refetch, isRefetching } = useLeaderboard();

  const handleRetry = () => {
    refetch();
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <div className="space-y-4">
              {/* Logo Switcher */}
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="relative">
                  <img 
                    src={rainLogo} 
                    alt="Rain.gg" 
                    className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 border-2 border-gaming-orange rounded-lg shadow-lg" 
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-gaming-orange rounded-full animate-pulse"></div>
                  </div>
                </div>
                <Link to="/rustclash">
                  <img 
                    src={clashLogo} 
                    alt="Clash.gg" 
                    className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 opacity-60 hover:opacity-100 border-2 border-transparent hover:border-gaming-orange/50 rounded-lg" 
                  />
                </Link>
              </div>


              <div className="flex justify-center items-center gap-3 mb-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-bounce-in">
                  Rain Leaderboard
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Track the top performers in our Rain.gg competition
              </p>

              <div className="mb-4 p-4 bg-card border border-border rounded-lg hover-lift">
                <p className="text-center text-foreground responsive-text">
                  Use code{" "}
                  <a 
                    href="https://rain.gg/r/syskeys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-gaming-orange bg-gaming-orange/10 px-3 py-2 rounded border-2 border-gaming-orange/30 hover:bg-gaming-orange hover:text-gaming-dark transition-all duration-300 underline decoration-2 underline-offset-2 hover-lift"
                  >
                    syskeys
                  </a>{" "}
                  to participate
                </p>
              </div>

              {data?.ends_at && (
                <div className="flex justify-center mb-6">
                  <CountdownTimer 
                    endDate={data.ends_at} 
                    title="Rain Competition Ends in"
                  />
                </div>
              )}

              <div className="flex justify-center mb-6">
                <Button asChild variant="outline" className="hover-lift">
                  <Link to="/prev-leaderboard/rain">
                    Previous Leaderboard
                  </Link>
                </Button>
              </div>
            </div>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 px-4 sm:px-0">
                  <a
                    href="https://kick.com/syskeysss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 bg-[#53FC18] text-black font-black rounded-xl hover:bg-[#45D415] transition-all duration-300 hover-lift shadow-lg border-2 border-[#53FC18]/50 w-full sm:w-auto min-w-[140px] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <img src="https://kick.com/favicon.ico" alt="Kick" className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                    <span className="relative z-10">KICK</span>
                  </a>
                  <a
                    href="https://discord.gg/syskeys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 bg-[#5865F2] text-white font-black rounded-xl hover:bg-[#4752C4] transition-all duration-300 hover-lift shadow-lg border-2 border-[#5865F2]/50 w-full sm:w-auto min-w-[140px] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span className="relative z-10">DISCORD</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@syskeyss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 bg-[#f44336] text-black font-black rounded-xl hover:bg-[#f44336] transition-all duration-300 hover-lift shadow-lg border-2 border-[#53FC18]/50 w-full sm:w-auto min-w-[140px] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <img src="https://youtube.com/favicon.ico" alt="Kick" className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                    <span className="relative z-10">YOUTUBE</span>
                  </a>
                </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* <Badge variant="secondary" className="text-sm hover-lift bg-gaming-orange/20 text-gaming-orange border-gaming-orange/30">
                <Clock className="w-4 h-4 mr-1" />
                Updates every 15 minutes
              </Badge>

              
              <Button
                onClick={handleRetry}
                variant="ghost"
                size="sm"
                disabled={isRefetching}
                className="hover-lift"
              >
                <RefreshCw className={`w-4 h-4 mr-1 ${isRefetching ? 'animate-spin' : ''}`} />
                {isRefetching ? 'Refreshing...' : 'Refresh'}
              </Button> */}
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-8">
              <NetworkErrorDisplay 
                onRetry={handleRetry} 
                message={error.message || "Failed to load leaderboard data. Please try again."} 
              />
            </div>
          )}

          {/* Top 3 Podium */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 mr-2 text-gaming-orange" />
              <h2 className="text-2xl font-bold">Top Performers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 responsive-grid max-w-4xl mx-auto">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <PodiumCardSkeleton key={index} />
                ))
              ) : (
                <>
                  {/* Second Place */}
                  {data?.participants?.[1] && (
                    <div className="md:order-1">
                      <PodiumCard
                        rank={2}
                        name={data.participants[1].name}
                        wager={data.participants[1].wager}
                        prize={data.participants[1].prize}
                        avatar={data.participants[1].avatar}
                      />
                    </div>
                  )}
                  
                  {/* First Place */}
                  {data?.participants?.[0] && (
                    <div className="md:order-2">
                      <PodiumCard
                        rank={1}
                        name={data.participants[0].name}
                        wager={data.participants[0].wager}
                        prize={data.participants[0].prize}
                        avatar={data.participants[0].avatar}
                        isWinner
                      />
                    </div>
                  )}
                  
                  {/* Third Place */}
                  {data?.participants?.[2] && (
                    <div className="md:order-3">
                      <PodiumCard
                        rank={3}
                        name={data.participants[2].name}
                        wager={data.participants[2].wager}
                        prize={data.participants[2].prize}
                        avatar={data.participants[2].avatar}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Remaining Leaderboard */}
          {(isLoading || (data && data.participants.length > 3)) && (
            <div className="bg-gradient-card  rounded-lg p-6 animate-slide-up hover-lift max-w-6xl mx-auto">
              
              {isLoading ? (
                <div className="space-y-2">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <LeaderboardRowSkeleton key={index} />
                  ))}
                </div>
              ) : (
                data && data.participants.length > 3 && (
                  <LeaderboardTable data={data.participants.slice(3)} startFromRank={4} />
                )
              )}
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-12 text-muted-foreground">
<a href="https://wlfyzz.net" target="_blank" rel="noopener noreferrer" className="text-sm emoji-no-shadow">
  made with ♥ by wlfyzz.net
</a>

          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
