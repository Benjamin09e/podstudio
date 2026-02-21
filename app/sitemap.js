export default function sitemap() {
    const baseUrl = 'https://podstudio.netlify.app/';
    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/portfolio`, lastModified: new Date() },
        { url: `${baseUrl}/pricing`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
    ];
}