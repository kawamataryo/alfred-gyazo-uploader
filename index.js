import 'alfy';
import { getSelectionFilsPath } from "./lib/getSelectionFilsPath.js"
import { uploadImage } from "./lib/gyazoClient.js"
import { isValidFileType } from "./lib/validate";

const TARGET_FILE_TYPES = ["jpg", "png", "gif"];

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

  const res = await uploadImage(files[0])

  if (process.env.FORMAT_TO_MARKDOWN === "true") {
    console.log(`![](${res.url})`)
    return;
  }

  console.log(res.url)
}

await main();
