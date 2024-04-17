/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns:[
            {
                protocol:'https',
                hostname : 'empphoto.s3.ap-south-1.amazonaws.com',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname : 'images.unsplash.com',
                port:'',
                pathname:'/**'                
            }
    ]
    }
};

export default nextConfig;
