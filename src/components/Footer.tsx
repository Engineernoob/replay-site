const FooterSection = () => {
  return (
    <footer className="bg-black py-8 relative">
      
      {/* Glowing Amber Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-amberGold shadow-lg shadow-amberGold/50"></div>
      
      <div className="container mx-auto px-4 text-center">
        <p className="text-amberGold font-body text-sm tracking-widest text-shadow-neon-amber">
          Re:Play — Conversations never really end.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;