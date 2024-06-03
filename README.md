<p style="font-size: 30px; font-weight: bold">登竜門 Hack 関西 Web チュートリアルリポジトリ</p>

> 公開 URL はこちら！！

https://hack-kansai-2024-web-tutorial.web.app

## 概要

`SaTyping`というタイピングゲームを作成するプロジェクト ~~（作成者の名前は佐竹です）~~

### 技術構成

- Frontend：React + TypeScript
- Backend：Supabase
- Hosting: Firebase

## Getting Started

GetStarted とは、プロジェクトの環境構築を行うための手順です

### ⓪ Prettier の導入

VSCode に拡張機能として`Prettier`というフォーマッタ（コードを整形するツール）を導入して下さい

方法についてはネット上に記事が沢山あるのでそれらを参照して下さい。

[VSCode で Prettier を使う方法【設定必要です】](https://ralacode.com/blog/post/vscode-prettier/)

### ① Node.js のインストール

以下のリンクから `Node.js` をインストールしてください

[Node.js のインストールリンクはこちら](https://nodejs.org/ja/download/)

<img src="./doc//images/image.png" width="500px">

| PC の種類                 | セレクト                                                                       |
| ------------------------- | ------------------------------------------------------------------------------ |
| Windows の方              | I want the `[v20.13.1(LTS)]`version of Node.js for `[Windows]` running `[x64]` |
| Mac の方                  | I want the `[v20.13.1(LTS)]`version of Node.js for `[Mac]` running `[ARM64]`   |
| Mac の方（IntelCPU 搭載） | I want the `[v20.13.1(LTS)]`version of Node.js for `[Mac]` running `[x64]`     |

### ② Node.js の動作確認

バージョンが表示されればインストールが成功しています（バージョンが表示されない場合には、PC を再起動してください）

```zsh
node -v
```

### ③ Dependencies のインストール

プロジェクトに必要な Dependencies をインストールしてください

```zsh
npm install
```

### ④ env の設定

以下のコマンドを実行し、作成された`.env`ファイルの中身を書き換えてください
（講習の中では`.env`ファイルの中身は配布します）

```env
cp .env.template .env
```

### ④ 開発用サーバーの起動

開発用サーバの起動（<a src="http://localhost:3000/">http://localhost:3000/</a> で画面が確認できる様になります）

```zsh
npm run dev
```
