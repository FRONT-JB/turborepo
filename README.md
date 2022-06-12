# Turborepo

- [x] Config Setup
  - [x] husky
  - [x] prettier
  - [x] emotion
  - [x] next.js
  - [x] lint

---

```bash
#For npm
npx husky-init && npm install

#For Yarn 1
npx husky-init && yarn

#For Yarn 2
yarn dlx husky-init --yarn2 && yarn
```

```bash
yarn add -D lint-staged
```

```bash
yarn husky add .husky/pre-commit "yarn lint-staged"
```

```js
// lint-staged.config.js
module.exports = {
  'apps/**/*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  'packages/ui/**/*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write']
}
```

---

```bash
// packages/ui or apps
yarn add @emotion/react @emotion/styled @emotion/core
```

```bash
// packages/ui or apps
yarn add @emotion/react @emotion/styled
```

```bash
// apps
yarn add -D @emotion/babel-plugin
```

```js
// apps/_app.tsx 에서 정의될 Theme.d.ts
// 이 설정을 이용해 Theme Value들을 자동완성으로 사용할 수 있다.
import '@emotion/react'
// Theme로 사용할 Types
import { ThemeTypes } from './types/types'

declare module '@emotion/react' {
  interface Theme extends ThemeTypes {}
}
```
