module.exports = {
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/signup',
        destination: 'http://localhost:3000/api/signup',
      },
      {
        source: '/api/adminlogin',
        destination: 'http://localhost:3000/api/adminlogin',
      },
      {
        source: '/api/userdata',
        destination: 'http://localhost:3000/api/userdata',
      },
    ]
  },
}
