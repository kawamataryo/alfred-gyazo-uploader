import FileType from "file-type";
import fs from "fs";

export const isValidFileType = async (path, validFileTypes) => {
  // is directory
  if(fs.statSync(path).isDirectory()) {
    return false;
  }

  const type = await FileType.fromFile(path);

  // is not image
  if(!type) {
    return false;
  }

  return validFileTypes.includes(type.ext)
}
