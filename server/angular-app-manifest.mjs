
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-pau/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-pau/acces",
    "route": "/angular-pau"
  },
  {
    "renderMode": 2,
    "route": "/angular-pau/acces"
  },
  {
    "renderMode": 2,
    "route": "/angular-pau/tauler"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-pau/acces",
    "route": "/angular-pau/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23576, hash: 'a6c651dd703aaf78e23dfb6e7782a1ab5bfc9db71dc0a480ff0cceecb03d4e40', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17150, hash: '20448704fd7b8a51296b96d91f9838124b66a64e0c85506418299fa6df78c893', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'tauler/index.html': {size: 41842, hash: 'fe8d7686d634d7a79ca8978ae0efa7061db7de3cdeda042a3a736b9e29c920ae', text: () => import('./assets-chunks/tauler_index_html.mjs').then(m => m.default)},
    'acces/index.html': {size: 85263, hash: 'f1c2aea21f377be8a889f56b0eacf8c813387a8e5df2e358d0b79a9f29085bfb', text: () => import('./assets-chunks/acces_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
