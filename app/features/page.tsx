import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center pt-[8vh]">
      <div className="text-center w-[700px] p-8">
        <h1 className="text-4xl font-bold mb-6">Experience the Future of AI Conversations</h1>
        
        <p className="text-lg mb-6">
          💬 <strong>Ask Anything, Anytime</strong> - From quick questions to deep discussions, TalkFlow is ready to guide you.
        </p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🚀 Boost Productivity</h2>
          <p className="text-lg">Get things done faster with our intelligent task support and problem-solving capabilities.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🌈 Tailored for You</h2>
          <p className="text-lg">A conversational experience that feels personal and empowering. TalkFlow adapts to your preferences to provide highly relevant and insightful responses.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🔒 Privacy First</h2>
          <p className="text-lg">Your data is safe and secure with TalkFlow. We prioritize your confidentiality at every step.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
