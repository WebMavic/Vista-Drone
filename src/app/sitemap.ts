import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    
    let urls = [
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, priority: 1.0 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`, priority: 1.0 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`, priority: 1.0 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`, priority: 0.8 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/career`, priority: 0.7 },
       
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications`, priority: 0.8 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/agriculture`, priority: 0.7 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/construction`, priority: 0.7 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/fisheries`, priority: 0.7 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/mining`, priority: 0.7 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/oil-and-gas`, priority: 0.7 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/renewable-energy`, priority: 0.7 },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/applications/steel`, priority: 0.7 },
    ];
    
    return urls.map(({ url, priority }) => ({
        url,
        lastModified: new Date().toISOString(),
        priority,
        changeFrequency: 'yearly',
    }));
}
