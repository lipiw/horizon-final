// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://pjpw.vercel.app/:path*', // supondo que sua API Python esteja rodando na porta 5000
        },
      ]
    },
  };