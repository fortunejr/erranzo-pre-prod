import React, { useEffect, useState } from 'react';
import heroImage from '../assets/erranzo-hero.jpg';
import { logo2 } from '../imports';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: '🏃‍♂️', title: 'Quick Errands', desc: 'Get your tasks done fast' },
    { icon: '📱', title: 'Easy Booking', desc: 'Book with just a few taps' },
    { icon: '🔒', title: 'Secure & Safe', desc: 'Trusted and verified erranzers' },
    { icon: '⚡', title: 'Real-time Updates', desc: 'Track your errands live' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 text-m px-6 py-6">
        {/* Navigation */}
        <nav className="w-full border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={logo2} alt="Erranzo Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold">Erranzo</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="hover:text-black">Features</a>
                <a href="#about" className="hover:text-black">About</a>
                <span className="text-s px-2 py-1 border border-gray-300 rounded-full">Coming Soon</span>
            </div>
            </div>
        </nav>

        {/* Hero Section */}
        <div className="py-24 bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div>
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full mb-2 text-s">🚀 Launch Coming Soon</span>
                <h1 className="text-3xl font-bold leading-tight">
                    All errands <br />
                    <span className="text-blue-600">One app.</span>
                </h1>
                <p className="text-m text-gray-600 mt-2 max-w-md">
                    The smartest way to get your daily tasks done. Book trusted runners, 
                    track in real-time, and reclaim your precious time.
                </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                <a href="#waitlist">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-m font-medium transition">
                    Get Early Access
                    </button>
                </a>
                </div>
                <div className="flex items-center gap-6 pt-4 text-center text-xs">
                <div>
                    <div className="text-xl font-bold">1000+</div>
                    <div className="text-gray-500">Signups</div>
                </div>
                <div className="w-px h-10 bg-gray-300"></div>
                <div>
                    <div className="text-xl font-bold">50+</div>
                    <div className="text-gray-500">Cities</div>
                </div>
                <div className="w-px h-10 bg-gray-300"></div>
                <div>
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-gray-500">Support</div>
                </div>
                </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <img 
                src={heroImage} 
                alt="Erranzo Illustration" 
                className="rounded-2xl shadow-md"
                />
            </div>
            </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-24 bg-white">
            <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Why Choose Erranzo?</h2>
            <p className="text-m text-gray-600 max-w-xl mx-auto mb-10">
                We're building the future of errand services with cutting-edge technology 
                and a focus on reliability.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                <div
                    key={index}
                    className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
                >
                    <div className="text-3xl mb-1">{feature.icon}</div>
                    <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
                    <p className="text-s text-gray-600">{feature.desc}</p>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Email Waitlist Section */}
        <div id="waitlist" className="py-24 bg-gray-100">
            <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Be Among the First</h2>
            <p className="text-m text-gray-600 mb-5">
                Join our waitlist and get exclusive early access when we launch.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-lg border border-gray-300 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm transition"
                >
                Notify Me
                </button>
            </form>
            </div>
        </div>

        {/* Footer */}
        <footer className="py-10 border-t border-gray-200 text-center text-xs text-gray-500">
            <div className="flex flex-col items-center gap-2">
            <img src={logo2} alt="Erranzo Logo" className="w-8 h-8 object-contain" />
            <p className="font-medium">Your errands, delivered with care.</p>
            <p>© 2025 Erranzo. Coming soon to your neighborhood.</p>
            </div>
        </footer>
    </div>

  );
};

export default Homepage;
