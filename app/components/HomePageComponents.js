"use client"

import dynamic from 'next/dynamic';

const CertificationAll = dynamic(() => import("@/app/components/CertificationAll"), {
  ssr: false,         // disables server-side rendering
  loading: () => <p>Loading...</p>, // optional loading fallback
});
const MobileviewForm = dynamic(() => import("@/app/components/MobileviewForm"), {
  ssr: false,         
  loading: () => <p>Loading...</p>, 
});
const MobileviewSlider = dynamic(() => import("@/app/components/MobileviewSlider"), {
  ssr: false,       
  loading: () => <p>Loading...</p>, 
});
const TestimonialSlider = dynamic(() => import("@/app/components/TestimonialSlider"), {
  ssr: false,         
  loading: () => <p>Loading...</p>, 
});

export default function HomePageComponents() {
    return (
        <div>
{/* MobileviewForm start */}
      <div className="block md:hidden my-6">
       <MobileviewForm/>
      </div>
    {/* MobileviewForm end */}

    {/* certification slides mobile view start  */}
      <div className="block lg:hidden">
      <MobileviewSlider/>
      </div>
    {/* certification slides mobile view end */}

    {/* testimonial slider mobileview start */}
     <div className="block lg:hidden">
     <h2 className="text-themeblue font-bold text-center text-2xl my-5">Testimonials</h2>
      <TestimonialSlider/>
     </div>
    {/* testimonial slider mobileview end */}

    {/* certification start  */}
        <div className="my-4 max-lg:hidden block">
        <CertificationAll/>
        </div>
    {/* certification start  */}

        </div>
    );
}