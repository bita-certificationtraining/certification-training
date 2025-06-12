"use client"

import dynamic from 'next/dynamic';

const ContactPage = dynamic(() => import("@/app/components/ContactPage"), {
  ssr: false,        
  loading: () => <p>Loading...</p>, 
});
// import ContactPage from "./ContactPage";

export default function ContactPageComponents() {
    return (
        <div>
            <ContactPage/>
        </div>
    );
}