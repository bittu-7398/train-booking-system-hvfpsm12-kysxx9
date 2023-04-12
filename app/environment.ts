
const mockBackendModule = require('angular-in-memory-web-api').InMemoryWebApiModule;

let IMPORTS: any[] = [];

IMPORTS.push(
mockBackendModule.forRoot(
 require('../app/mocks/in-memory-backend').InMemoryBackend,{
  apiBase: '/',
  host: '/',
  passThruUnknownUrl: true
}
)
);

export const ENV_IMPORTS = IMPORTS;
