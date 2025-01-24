import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="text-white">
            <h2 className="text-xl font-bold mb-4">Coddunity</h2>
          </div>

          {/* Links - Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/home" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Links - Help */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Help</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/support" className="hover:text-white">Support</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Links - Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/ebooks" className="hover:text-white">Free eBooks</a></li>
              <li><a href="/tutorials" className="hover:text-white">Development Tutorial</a></li>
              <li><a href="/how-to" className="hover:text-white">How-to Blog</a></li>
              <li><a href="/playlist" className="hover:text-white">YouTube Playlist</a></li>
            </ul>
          </div>

          {/* Links - Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://blazex.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">BlazeX</a></li>
              <li><a href="https://charityx.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">CharityX</a></li>
              <li><a href="https://devton.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">Devton</a></li>
              <li><a href="https://dover.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">Dover</a></li>
            </ul>
          </div>
        </div>

        
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Coddunity. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
