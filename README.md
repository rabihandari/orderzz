# Orderzz

"Coming Soon" landing page for [orderzz.com](https://orderzz.com), built with React.

## Project Structure

```
orderzz/
├── client/                     # React app (Create React App)
│   ├── src/
│   │   └── pages/CommingSoon/  # Coming soon page component
│   ├── public/                 # Static assets
│   ├── proxy/nginx.conf        # Nginx config for production (SSL, redirects)
│   ├── dockerfile              # Builds nginx image serving the app
│   └── .env                    # REACT_APP_HOST_URL and other client env vars
└── docker-compose-production.yml  # Production deployment (nginx + Let's Encrypt certs)
```

## Getting Started

### Prerequisites

- Node.js and npm

### Development

```bash
cd client
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000) in development mode.

### Build

```bash
cd client
npm run build
```

Builds the app for production to `client/build`.

## Deployment

The production image is built from `client/dockerfile`, which serves the pre-built `client/build` folder via nginx.

```bash
docker compose -f docker-compose-production.yml up -d
```

This expects:
- `client/build` to exist (run `npm run build` first)
- `client/.env` with the required environment variables
- Let's Encrypt certificates for `orderzz.com` available at `/etc/letsencrypt/live/orderzz.com/`
- An external Docker network named `server_load_balancer`

## Environment Variables

Set in `client/.env`:

| Variable | Description |
|---|---|
| `REACT_APP_HOST_URL` | Base host URL used by the client app |
