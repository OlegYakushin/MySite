# olegotka Agent Discovery API

This static site does not expose a transactional product API. The available machine-readable endpoints are for discovery by crawlers and AI agents.

## Endpoints

- `GET /.well-known/api-catalog` — RFC 9727 API catalog in linkset JSON form.
- `GET /openapi.json` — OpenAPI description for public discovery endpoints.
- `GET /health.json` — static health/status metadata.
- `GET /.well-known/agent-card.json` — A2A agent card.
- `GET /.well-known/mcp/server-card.json` — MCP server card.
- `GET /.well-known/agent-skills/index.json` — agent skills discovery index.
- `GET /index.md` — markdown representation of the homepage.

## Authentication

There are no protected APIs on `olegotka.es` today. OAuth metadata is published to make that explicit to automated agents.
