/** @format */

const { readFile, writeFile } = require('fs').promises;

// TODO  can be done without the utils imported !!!
const utils = require('util');
const readFile = utils.promisify(readFile);
const writeFile = utils.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf-8');
    const second = await readFilePromise('./content/second.txt', 'utf-8');
    await writeFile(
      './content/result-mind-grenade.txt',
      `This AWESOME : ${first}, ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// getText(path)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };