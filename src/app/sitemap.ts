import type { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap {
    
    let urls:string[] = [
        `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/career`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/career/apply`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/agriculture`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/construction`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/fisheries`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/mining`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/oil-and-gas`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/renewable-energy`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications/steel`,
    ]
    
    return urls.map(url => {
        return {
            url,
            lastModified: new Date().toISOString(),
            priority : 1,
            changeFrequency: 'yearly'
        }
    })
    
}
