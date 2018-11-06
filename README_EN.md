# node-starter

[English document](./README_EN.md)

Node web app quick start scaffold

#### Characteristics

1、babel7 + stage-0 all the latest magic grammar + transcoding features not supported by the current node version

2、Development mode : nodemon, automatically refresh

3、Production mode : pm2

### Install

```bash
npm i
```

### Develop（nodemon）

```bash
npm run dev
```

### Build

```bash
npm run build // The generated file is under the dist directory
```

### Production start

Install pm2 globally first

```bash
npm i -g pm2
```

Then

```bash
npm run pm2
```

### Custom

1、pm2 configuration pm2.json

2、The command is in package.json scripts

3、babel configuration .babelrc

### Code formate

vscode install Prettier - Code formatter

### Code tips

Vscode nodejs syntax hint

Need npm > 5

```bash
npx typings install dt~node --global --save
```

The typings folder is generated under the root directory to contain the node's declaration file

### Unit testing Jest

npm run test
