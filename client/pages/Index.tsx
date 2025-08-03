import { useEffect, useState } from "react";

const ConfettiPiece = ({ delay }: { delay: number }) => {
  const colors = ['#FFD700', '#FF69B4', '#9945FF', '#00BFFF', '#FF6347', '#32CD32'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div
      className="absolute w-2 h-2 animate-confetti"
      style={{
        backgroundColor: randomColor,
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  );
};

const Sparkle = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-celebration-gold rounded-full animate-sparkle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const HeartFloat = ({ delay }: { delay: number }) => {
  return (
    <div
      className="absolute text-celebration-pink text-2xl animate-float opacity-60"
      style={{
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 80 + 10}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + Math.random() * 2}s`,
      }}
    >
      💖
    </div>
  );
};

export default function Index() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "🎉 İyi ki doğdunuz Yusuf ve Sanem! 🎉",
    "🌟 Hayatınız mutlulukla dolsun! 🌟", 
    "🎂 En güzel dileklerimizle! 🎂",
    "💝 Bu özel gününüz kutlu olsun! 💝"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-celebration-purple/30 via-celebration-pink/30 to-celebration-blue/30 animate-rainbow" 
           style={{ backgroundSize: '200% 200%' }} />
      
      {/* Confetti */}
      {Array.from({ length: 50 }).map((_, i) => (
        <ConfettiPiece key={`confetti-${i}`} delay={i * 0.1} />
      ))}
      
      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Sparkle 
          key={`sparkle-${i}`} 
          x={Math.random() * 100} 
          y={Math.random() * 100} 
          delay={i * 0.2} 
        />
      ))}
      
      {/* Floating hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <HeartFloat key={`heart-${i}`} delay={i * 0.3} />
      ))}
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Birthday cake emoji */}
        <div className="text-8xl md:text-9xl animate-float mb-8">
          🎂
        </div>
        
        {/* Main title */}
        <div className={`text-center transition-all duration-2000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-celebration-gold via-celebration-pink to-celebration-purple bg-clip-text text-transparent mb-6 animate-glow">
            DOĞUM GÜNÜ KUTLU OLSUN!
          </h1>
          
          {/* Names */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mb-8">
            <div className="text-3xl md:text-5xl font-bold text-celebration-gold animate-pulse">
              🌟 YUSUF 🌟
            </div>
            <div className="text-2xl md:text-3xl text-celebration-pink animate-bounce">
              &
            </div>
            <div className="text-3xl md:text-5xl font-bold text-celebration-pink animate-pulse">
              🌟 SANEM 🌟
            </div>
          </div>
          
          {/* Rotating messages */}
          <div className="h-16 md:h-20 flex items-center justify-center">
            <p className="text-xl md:text-3xl text-white font-semibold text-center transition-all duration-1000 transform">
              {messages[currentMessage]}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex gap-8 text-4xl md:text-6xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎈</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎊</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎁</span>
          <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🎉</span>
          <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🎈</span>
        </div>
        
        {/* Special wishes */}
        <div className="mt-16 max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Bu özel gününüzde, hayatınızın her anının mutluluk, sevgi ve neşe ile dolmasını dileriz. 
              Yeni yaşınız size sağlık, huzur ve başarı getirsin. İyi ki varsınız! 🥳✨
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating balloons */}
      <div className="fixed bottom-0 left-0 w-full pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`balloon-${i}`}
            className={`absolute text-4xl md:text-5xl animate-float`}
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${Math.random() * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            🎈
          </div>
        ))}
      </div>
      
      {/* Corner decorations */}
      <div className="fixed top-4 left-4 text-3xl animate-spin">⭐</div>
      <div className="fixed top-4 right-4 text-3xl animate-spin" style={{ animationDirection: 'reverse' }}>⭐</div>
      <div className="fixed bottom-4 left-4 text-3xl animate-pulse">🌟</div>
      <div className="fixed bottom-4 right-4 text-3xl animate-pulse">🌟</div>
    </div>
  );
}
