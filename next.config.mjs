/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{protocol:'https',hostname:'i.pinimg.com'},{protocol:'https',hostname:'assets.aceternity.com'}]
    },
    
};

export default nextConfig;
