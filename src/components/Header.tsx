import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/60 backdrop-blur-md z-50 border-b border-white/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">MarketAI India</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#insights">Insights</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
              <MobileNavLink href="#insights" onClick={() => setIsMenuOpen(false)}>Insights</MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a href={href} className="text-gray-600 hover:text-indigo-600 transition-colors block py-2 font-medium" onClick={onClick}>
    {children}
  </a>
);