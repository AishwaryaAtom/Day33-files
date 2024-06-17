import fs from "fs";

const CreateFile = () => {
  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  }

  const fileName = `./files/${getFormattedDate()}.txt`;
  const fileContent = `${Date.now()}`;

  try {
    if (!fs.existsSync("./files")) {
      fs.mkdirSync("./files", { recursive: true });
    }
    fs.writeFileSync(fileName, fileContent);
    console.log(`File created: ${fileName}`);
  } catch (e) {
    console.log(`File not Created: ${e.message}`);
  }
};

const ReadFolder = (folderName) => {
  try {
    let files = fs.readdirSync(folderName);
    return files;
  } catch (e) {
    console.log(`Error in reading: ${e.message}`);
    return [];
  }
};

export { CreateFile, ReadFolder };
