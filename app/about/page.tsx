'use client'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import dynamic from 'next/dynamic';


/* eslint-disable */
const AboutSection = dynamic(() => import('@/app/about/page'), {
  ssr: false, 
});

const content = [
  {
    title: "About Talkflow ",
    description:`<div className="about-section bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Welcome to <strong className="text-blue-600">TalkFlow</strong>, where seamless communication meets cutting-edge technology. Our mission is to redefine how you interact with the digital world through smart, intuitive, and reliable chatbot solutions.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      At <strong className="text-blue-600">TalkFlow</strong>, we combine advanced AI-powered conversational technology with user-friendly design to deliver an unmatched experience. Whether you’re here to enhance customer support, streamline operations, or create a personal assistant, we’ve got you covered.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Our goal is to make your digital interactions more efficient and personalized, using the power of AI to provide quick, accurate, and contextually aware responses.
    </p>
  </div>
</div>
`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/logo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Questions ",
    description: `<div className="why-choose-talkflow-container">
  <h2 className="text-3xl font-bold mb-6">Why Choose TalkFlow?</h2>
  
  <div className="feature-item mb-4">
    <span role="img" aria-label="star" className="text-2xl">🌟</span>
    <h3 className="text-xl font-semibold inline ml-2">Seamless Communication</h3>
    <p className="text-lg mt-2">
      Engage in meaningful and intuitive conversations tailored just for you.
    </p>
  </div>
  
  <div className="feature-item mb-4">
    <span role="img" aria-label="lightbulb" className="text-2xl">💡</span>
    <h3 className="text-xl font-semibold inline ml-2">Smart and Adaptive</h3>
    <p className="text-lg mt-2">
      TalkFlow learns from your preferences to provide highly relevant and insightful responses.
    </p>
  </div>
  
  <div className="feature-item mb-4">
    <span role="img" aria-label="clock" className="text-2xl">⏱️</span>
    <h3 className="text-xl font-semibold inline ml-2">Available Anytime, Anywhere</h3>
    <p className="text-lg mt-2">
      Day or night, TalkFlow is here to make your life easier with instant support.
    </p>
  </div>
  
  <div className="feature-item mb-4">
    <span role="img" aria-label="lock" className="text-2xl">🔒</span>
    <h3 className="text-xl font-semibold inline ml-2">Privacy First</h3>
    <p className="text-lg mt-2">
      Your data is safe and secure with TalkFlow. We prioritize your confidentiality at every step.
    </p>
  </div>
</div>
`,
content: (
  <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
    Why choose TalkFlow
  </div>
),
  },
  {
    title: "Developers ",
    description:`<div className="about-me-container">
  <h2 className="text-3xl font-bold mb-4">About Me</h2>
  <p className="text-lg">
    Hello! I'm currently a <strong>Software Engineering (SE) AIML student</strong> at <strong>PES Modern College of Engineering, Pune</strong>. As a passionate web developer, I specialize in <strong>Next.js</strong>, <strong>React.js</strong>, and <strong>Tailwind CSS</strong>. I also have a strong command of <strong>Data Structures and Algorithms (DSA)</strong> in <strong>C++</strong>, which allows me to solve complex problems with efficient code.
  </p>
  <p className="text-lg mt-4">
    When I'm not coding, I enjoy learning about new technologies and enhancing my skills in both software development and artificial intelligence. I’m committed to continuously improving my expertise to build better, more scalable web applications.
  </p>
</div>

`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/devloper.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const page = () => {
  return (
    <div className="h-screen w-screen">
      <StickyScroll content={content} contentClassName="" />
    </div>
  );
};

export default page;
