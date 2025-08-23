export const Footer = () => {
  return (
    <footer className="py-16 px-8 bg-background border-t border-chrome-mid/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* VIGOR Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-thin text-chrome tracking-wider mb-4">VIGOR</h3>
            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              Crafting the future of digital experiences with precision, innovation, and artistic vision.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-chrome-start font-light tracking-wide mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li className="hover:text-foreground transition-colors cursor-pointer">Branding & Design</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">AI Solutions</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Marketing Strategy</li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-chrome-start font-light tracking-wide mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li className="hover:text-foreground transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Dribbble</li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-chrome-mid/30 to-transparent mb-8" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground font-light">
          <div>© 2025 VIGOR. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};