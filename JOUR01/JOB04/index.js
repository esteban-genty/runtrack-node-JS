import { readdir } from 'node:fs/promises';

const path = "../"

try {
  const files = await readdir(path);
  console.log(files);
  console.log("Contenue du répertoire courrant:");
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}