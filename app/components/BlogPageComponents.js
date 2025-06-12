"use client"

import dynamic from 'next/dynamic';

const BlogSlider = dynamic(() => import("@/app/components/BlogSlider"), {
  ssr: false,        
  loading: () => <p>Loading...</p>, 
});


export default function BlogPageComponents() {
    return (
        <div>
            <BlogSlider/>
        </div>
    );
}