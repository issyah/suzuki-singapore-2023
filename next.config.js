module.exports = {
  reactStrictMode: true,
  experimental: {
    modularizeImports: {
      "@mui/material": {
        transform: "@mui/material/{{member}}",
      },
      "@mui/icons-material": {
        transform: "@mui/icons-material/{{member}}",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/motorcycles/360-viewer/gsx-r150",
        destination: "/html/gsx-r150/index.html",
      },
      {
        source: "/motorcycles/360-viewer/gsx-r150/:path*",
        destination: "/html/gsx-r150/:path*",
      },
      {
        source: "/motorcycles/360-viewer/gsx-r150/:path*",
        destination: "/html/gsx-r150/:path*",
      },
      {
        source: "/motorcycles/360-viewer/hayabusa",
        destination: "/html/GSX1300/index.html",
      },
      {
        source: "/motorcycles/360-viewer/gsx-s1000gt",
        destination: "/html/gsx-s1000gt/index.html"
      },
      {
        source: "/motorcycles/360-viewer/:path*",
        destination: "/html/:path*",
      },
    ];
  },
};
