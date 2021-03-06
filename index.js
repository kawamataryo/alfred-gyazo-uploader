import alfy from 'alfy';
import { getSelectionFilsPath } from "./lib/getSelectionFilsPath.js"
import { uploadImage } from "./lib/gyazoClient.js"
import { isValidFileType } from "./lib/validate";
import alfredNotifier from "alfred-notifier";

alfredNotifier();

const TARGET_FILE_TYPES = ["jpg", "png", "gif"];
const API_TOKEN = process.env.GYAZO_API_TOKEN

const main = async () => {
  const files = await getSelectionFilsPath();
  if (files.length !== 1) {
    console.log('Multiple files selected.');
    return
  }

  const file = files[0];

  const isValid = await isValidFileType(file, TARGET_FILE_TYPES)
  if (!isValid) {
    console.log('Invalid file type selected.')
    return
  }

  if(!API_TOKEN){
    console.log('Gyazo API TOKEN is not set.')
    return
  }

  try {
    const res = await uploadImage(file, API_TOKEN)
    console.log(`![](${res.url})`)
  } catch(e) {
    console.log('Gyazo API token is invalid.')
    alfy.log(e)
  }
}

await main();
