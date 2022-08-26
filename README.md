# Basic API Proxy server

Project to create a basic API proxy server, based on Brad Traversy's tutorial.

The proxy server adds an extra degree of security by allowing us to hide public API keys that might otherwise be visible to the client. I can see how it might be further extended to validate server responses before serving them up to the client (act as a sort of firewall).

The example here also makes use of rate limiting (to prevent a flood of requests) and basic GET request caching.
