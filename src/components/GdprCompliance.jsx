import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Optional icon

function GdprCompliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white pt-12 px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-center mb-12">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="text-green-400" size={40} />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          GDPR Compliance
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          At <span className="font-semibold text-white">Truth or Drink</span>, your privacy and data protection are important to us. As a website accessible globally, we aim to comply with the General Data Protection Regulation (GDPR) of the European Union.
        </p>

        <div className="text-left text-sm text-gray-100 space-y-4 mt-6">
          <p>
            <strong>Data We Collect:</strong> We do not collect any personal data unless you voluntarily provide it through contact forms or feedback. Our site does not use cookies for tracking unless you interact with embedded tools like Google Analytics or Microsoft Clarity.
          </p>

          <p>
            <strong>Analytics Tools:</strong> We use Google Analytics and Microsoft Clarity to better understand how users engage with our website. These tools may collect anonymized data like browser type, country, and time spent on site.
          </p>

          <p>
            <strong>Your Rights:</strong> Under the GDPR, you have the right to access, modify, or delete any personal data we might store. You can also request a copy of your data or restrict its processing.
          </p>

          <p>
            <strong>Data Retention:</strong> We only retain anonymized analytics data and do not store any user-specific identifiers for longer than necessary.
          </p>

          <p>
            <strong>Third-Party Services:</strong> We ensure that all third-party services we use are GDPR-compliant.
          </p>

          <p>
            <strong>Contact:</strong> For GDPR-related inquiries, please email us at <a className="underline" href="mailto:truthordrinks@gmail.com">gdpr@truthordrink.pro</a>.
          </p>
        </div>

        <Link
          to="/"
          className="mt-10 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-black font-bold tracking-wide shadow-lg hover:scale-105 transition"
        >
          🔙 Return to Game
        </Link>
      </div>
    </div>
  );
}

export default GdprCompliance;
