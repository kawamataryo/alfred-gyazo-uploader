import { exec } from "child_process";
import util from "util";

export const getSelectionFilsPath = async () => {
  const result = await util.promisify(exec)("automator get_selection.workflow");
  return result.stdout.match(/".+?"/g).map((f) => f.slice(1, -1));
}
