'use client';

import { useRouter } from 'next/navigation'; 


export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <button onClick={handleBack} className="px-4 py-2 bg-blue-500 text-white rounded mt-5">
      Go Back
    </button>
  );
}
