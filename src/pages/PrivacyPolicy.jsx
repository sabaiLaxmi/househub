import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-navy-900 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-navy-800 rounded-2xl border border-navy-700 p-8 md:p-12 shadow-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b border-navy-700 pb-6">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-teal-400 mb-4">1. Introduction</h2>
            <p>
              Welcome to PropertyHub. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-teal-400 mb-4">2. The Data We Collect About You</h2>
            <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-white">Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong className="text-white">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong className="text-white">Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-teal-400 mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
              to provide our luxury real estate services, manage our relationship with you, and to improve our website 
              and services. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-teal-400 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-teal-400 mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
              including the right to request access, correction, erasure, restriction, transfer, to object to processing, 
              to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-teal-400 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br/><br/>
              <strong className="text-white">Email:</strong> privacy@propertyhub.com<br/>
              <strong className="text-white">Phone:</strong> +1 (800) 123-4567
            </p>
          </section>
          
          <p className="text-sm text-gray-500 pt-8 mt-8 border-t border-navy-700">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
