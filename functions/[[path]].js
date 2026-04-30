const AGENT_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</docs/api.md>; rel="service-doc"; type="text/markdown"',
  '</index.md>; rel="alternate"; type="text/markdown"',
  '</.well-known/agent-card.json>; rel="describedby"; type="application/json"'
].join(', ');

function withAgentHeaders(response) {
  const next = new Response(response.body, response);
  next.headers.append('Link', AGENT_LINK_HEADER);
  next.headers.append('Vary', 'Accept');
  return next;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const accept = context.request.headers.get('Accept') || '';

  if (url.pathname === '/' && accept.includes('text/markdown')) {
    const markdownUrl = new URL('/index.md', url);
    const markdownRequest = new Request(markdownUrl, context.request);
    const markdown = await context.env.ASSETS.fetch(markdownRequest);
    const response = withAgentHeaders(markdown);
    response.headers.set('Content-Type', 'text/markdown; charset=utf-8');
    return response;
  }

  const response = await context.next();

  if (url.pathname === '/') {
    return withAgentHeaders(response);
  }

  if (url.pathname === '/.well-known/api-catalog') {
    const next = new Response(response.body, response);
    next.headers.set('Content-Type', 'application/linkset+json; charset=utf-8');
    return next;
  }

  return response;
}
