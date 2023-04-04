module.exports = {
  reactStrictMode: true,
  async rewrites(){
    return [
      {
        source: '/motorcycles/360-viewer/gsx-r150',
        destination: '/html/gsx-r150/index.html'
      },
      {
        source: '/motorcycles/360-viewer/gsx-r150/:path*',
        destination: '/html/gsx-r150/:path*'
      },
      {
        source: '/motorcycles/360-viewer/gsx-r150/:path*',
        destination: '/html/gsx-r150/:path*'
      },
      {
        source: '/motorcycles/360-viewer/hayabusa',
        destination: '/html/GSX1300/index.html'
      },
      {
        source: '/motorcycles/360-viewer/:path*',
        destination: '/html/:path*'
      },
    ]
  }
};
