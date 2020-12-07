# alfred-gyazo-uploader

![](https://i.gyazo.com/4ce3e6ee776197bb1269b63fb1943ca7.png)

Alfred-workflow for easy file uploading to [Gyazo](https://gyazo.com).

# Features

- Upload selected jpeg, png and gif files to Gyazo
- Paste the public URL of the uploaded image to the clipboard in Markdown format

![](https://i.gyazo.com/e4cf93b2f2b5ca0b430f62446d0efce0.gif)

## Install
Requires the Alfred 3 or 4 [Powerpack](https://www.alfredapp.com/powerpack/), [Node.js](https://nodejs.org) 12+.

#### With NPM
Install with npm.

```
$ npm i -g alfred-gyazo-auploader
```

#### Manually
[download the workflow directly](https://github.com/kawamataryo/alfred-gyazo-uploader/releases).

## Usage

1. Select images file on finder
2. Open alfred and type `gyazou` and press the Enter key
3. The selected image will be uploaded to Gyazo
4. The public URL of the file on Gyazo will be copied to clipboard

## Configuration
You need to set the following environment variables before use.

|name|default|value|
|---|---|---|
|GYAZO_API_TOKEN | - | Set the Gyazo API TOKEN. Get the API token [here](https://gyazo.com/api?lang=en) |

![](https://i.gyazo.com/bfd53087ad1706d422a5644d2c3d04b5.png)

## Related

- [alfy](https://github.com/sindresorhus/alfy) - Create Alfred workflows with ease
- [gyazo-api](https://www.npmjs.com/package/gyazo-api) - Gyazo API wrapper for Node

## License

MIT ©
