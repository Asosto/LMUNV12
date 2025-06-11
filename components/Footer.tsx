import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="LMUN Logo" width={70} height={30} />
                <span className="text-4xl font-bold text-white">LMUN</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of global leaders through diplomatic education and international
                cooperation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/committees" className="block text-gray-400 hover:text-white transition-colors">
                  Committees
                </Link>
                <Link href="/schedule" className="block text-gray-400 hover:text-white transition-colors">
                  Schedule
                </Link>
                <Link href="/gallery" className="block text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
                <Link href="/upload" className="block text-gray-400 hover:text-white transition-colors">
                  Upload Payment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
                <Link href="/admin/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                  Admin
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2026 LMUN. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}