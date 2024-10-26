import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to transform your marketing strategy? Our team is here to help you leverage AI for the Indian market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-600 mt-1">Our team will respond within 24 hours</p>
                <a href="mailto:contact@marketai.in" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  contact@marketai.in
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-600 mt-1">Mon-Fri from 9am to 6pm IST</p>
                <p className="text-indigo-600">Chaitanya:- <a href="">+91 98695 66492</a></p>
                <a href="tel:+919869566492" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p className="text-gray-600 mt-1">ITM Skills University</p>
                <p className="text-gray-600">Kharghar, India 410210</p>
              </div>
            </div>
          </div>

          <div className="card-gradient rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full button-gradient text-white py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}