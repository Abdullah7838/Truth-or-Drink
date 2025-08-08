import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const DMCA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white pt-12 px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-center">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="text-yellow-300" size={40} />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
          Digital Millennium Copyright Act (DMCA) Policy
        </h1>

        <p className="text-white/80 text-base leading-relaxed mb-4">
          At <strong>Truth or Drink</strong> (<a className="underline" href="https://www.truthordrink.pro">www.truthordrink.pro</a>), we respect the intellectual property rights of others and expect our users to do the same. If you believe your copyrighted work has been used in a way that constitutes copyright infringement, please follow the steps below.
        </p>

        <div className="text-left mt-6 space-y-4 text-white/90 text-sm sm:text-base">
          <div>
            <h2 className="font-bold text-white mb-1">1. Details of the Copyrighted Work</h2>
            <p>
              Provide a clear description of the copyrighted material you claim has been infringed. If your notice covers multiple works, include a representative list.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-1">2. Identification of Infringing Material</h2>
            <p>
              Specify the content you believe is infringing, including the exact location (URL or page) on our site where it is found. Ensure you provide sufficient information to help us locate the material promptly.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-1">3. Contact Information</h2>
            <p>
              Include your full name, address, phone number, and email address so that we can reach you for any follow-up inquiries.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-1">4. Statement of Good Faith</h2>
            <p>
              Confirm that you genuinely believe the material’s use is unauthorized by the copyright owner, its agent, or the law.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-1">5. Accuracy Statement</h2>
            <p>
              Include a statement affirming that the information in your notice is accurate and that you are authorized to act on behalf of the copyright owner, under penalty of perjury.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-white mb-1">6. Signature</h2>
            <p>
              Provide your physical or electronic signature to validate your DMCA notice.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-white mb-1">Submit Your DMCA Notice to Our Copyright Agent:</h2>
            <p>Email: <a href="mailto:truthordrinks@gmail.com" className="underline">dmca@doflixapk.pro</a></p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-white mb-1">Once We Receive Your Valid DMCA Notice:</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>We will remove or disable access to the infringing content promptly.</li>
              <li>We will notify the uploader of the material about the complaint, giving them an opportunity to respond.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-white mb-1">Additional Information</h2>
            <p>
              For more details about the DMCA and its processes, visit the official U.S. Copyright Office website:{" "}
              <a href="https://www.copyright.gov" target="_blank" rel="noopener noreferrer" className="underline">
                www.copyright.gov
              </a>
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-10 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-black font-bold tracking-wide shadow-lg hover:scale-105 transition"
        >
          🔙 Return to Home
        </Link>
      </div>
    </div>
  );
};

export default DMCA;
