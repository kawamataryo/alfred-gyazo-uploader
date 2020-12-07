import 'alfy';
import { getSelectionFilsPath } from "./lib/getSelectionFilsPath.js"
import { uploadImage } from "./lib/gyazoClient.js"
import { isValidFileType } from "./lib/validate";

const TARGET_FILE_TYPES = ["jpg", "png", "gif"];
const API_TOKEN = process.env.GYAZO_API_TOKEN

const main = async () => {
  const files = await getSelectionFilsPath();
  if (files.length !== 1) {
    console.log('ERROR: Multiple files selected.');
    return
  }

  const file = files[0];

  const isValid = await isValidFileType(file, TARGET_FILE_TYPES)
  if (!isValid) {
    console.log('ERROR: Invalid file type selected.')
    return
  }

  if(!API_TOKEN){
    console.log('ERROR: Gyazo API TOKEN is not set.')
    return
  }

  const res = await uploadImage(files[0], API_TOKEN)

  console.log(`![](${res.url})`)
}

await main();
