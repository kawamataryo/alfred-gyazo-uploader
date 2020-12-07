import Gyazo from 'gyazo-api';
import path from 'path';
const client = new Gyazo(process.env.GYAZO_API_TOKEN);

export const uploadImage = async (filePath) => {
  const res = await client.upload(filePath, {
    title: path.basename(filePath),
    desc: "uploaded from alfred-gyazo-uploader"
  })

  return res.data
}
