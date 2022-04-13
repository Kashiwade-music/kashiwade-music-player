# Kashiwade Music Player
## setup
1. in Windows, use nvm-windows.
```sh
nvm list
nvm use {{latest}} # Replace with your latest downloaded version
```

## dev
```
yarn tauri dev
```

## package update
### nodejs
```sh
yarn upgrade-interactive
```

### Rust
in`src-tauri/Cargo.toml`
```
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```
[tauri](https://crates.io/crates/tauri/versions) / [tauri-build](https://crates.io/crates/tauri-build/versions).

```sh
cd src-tauri
cargo update
```

## dev enviroment
```plaintext
yarn run v1.22.15
$ tauri info

Environment
  › OS: Windows 10.0.19041 X64
  › Webview2: 100.0.1185.36
  › MSVC: 
      - Visual Studio Community 2022
  › Node.js: 17.4.0
  › npm: 8.3.1
  › pnpm: 6.11.0
  › yarn: 1.22.15
  › rustup: 1.24.3
  › rustc: 1.58.1
  › cargo: 1.58.0
  › Rust toolchain: stable-x86_64-pc-windows-msvc 

Packages
  › @tauri-apps/cli [NPM]: 1.0.0-rc.7
  › @tauri-apps/api [NPM]: 1.0.0-rc.3
  › tauri [RUST]: 1.0.0-rc.6,
  › tauri-build [RUST]: 1.0.0-rc.5,
  › tao [RUST]: 0.7.0,
  › wry [RUST]: 0.14.0,

App
  › build-type: bundle
  › CSP: default-src blob: data: filesystem: ws: wss: http: https: tauri: 'unsafe-eval' 'unsafe-inline' 'self' img-src: 'self'
  › distDir: ../build
  › devPath: http://localhost:8000/
  › framework: React

App directory structure
  ├─ .git
  ├─ node_modules
  ├─ public
  ├─ src
  ├─ src-tauri
  └─ test

```


