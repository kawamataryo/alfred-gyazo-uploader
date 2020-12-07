import Gyazo from 'gyazo-api';
import path from 'path';

export const uploadImage = async (filePath, token) => {
  const client = new Gyazo(token);
  const res = await client.upload(filePath, {
    title: path.basename(filePath),
    desc: "uploaded from alfred-gyazo-uploader"
  })

  return res.data
}
