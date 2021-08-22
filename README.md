# CRA(ken)

A CRA(ken) is a boilerplate of create react app with a lot of helpers.

## CRA vs CRA(ken)

|                        | CRA(ken)   | CRA        |
| ---------------------- | ---------- | ---------- |
| React Testing Library  | ✅ **yes** | ✅ **yes** |
| Routing                | ✅ **yes** | ❌ no      |
| Redux Store            | ✅ **yes** | ❌ no      |
| Redux Saga Middleware  | ✅ **yes** | ❌ no      |
| ESLint Configuration   | ✅ **yes** | ❌ no      |
| Prettier Configuration | ✅ **yes** | ❌ no      |
| Versioning App         | ✅ **yes** | ❌ no      |

## How to use

```sh
npx cra-ken-app my-app
cd my-app
npm start
```

## How to version your app

To increment your APP for example to 0.0.1 from 0.0.2

```sh
npm run version:patch
```

To increment your APP for example to 0.1.0 from 0.2.0

```sh
npm run version:minor
```

To increment your APP for example to 1.0.0 from 2.0.0

```sh
npm run version:major
```

## Contributing

If you are interested in contributing to this boilerplate, open an issue or a pr!

## Thanks

Thank You, Open Source!
