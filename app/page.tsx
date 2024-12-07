'use client';
import { useEffect, useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import ChatSection from '@/components/ChatSection';

export default function Home() {
  const [loadingPage, setLoadingPage] = useState<boolean>(true);

  useEffect(() => {
    // Check if the landing page has been shown before using localStorage
    const hasVisited = localStorage.getItem('hasVisitedLandingPage');

    if (hasVisited === 'true') {
      setLoadingPage(false); // Skip landing page if already visited
    }
  }, []);

  // This function toggles loadingPage and updates localStorage when the user dismisses the landing page
  const handleLandingPageToggle = () => {
    setLoadingPage(false);
    localStorage.setItem('hasVisitedLandingPage', 'true'); // Set flag in localStorage to skip landing page next time
  };

  return (
    <div>
      {loadingPage ? (
        <LandingPage

          setloadingPage={handleLandingPageToggle} // Pass handler to hide landing page
        />
      ) : (
        <ChatSection />
      )}
    </div>
  );
}
