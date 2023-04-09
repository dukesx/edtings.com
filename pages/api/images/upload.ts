import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { nanoid } from "nanoid";
import { createReadStream, readFileSync } from "fs";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({});

  const formPromise = await new Promise((resolve, reject) => {
    form.parse(req, async (err: any, fields: any, files: any) => {
      const bin = readFileSync(files.file[0].filepath);
      if (bin) {
        const url = `https://storage.bunnycdn.com/edtings-images/${nanoid()}.${
          files.file[0].mimetype.split("/")[1]
        }`;
        const options = {
          method: "PUT",
          body: bin,
          headers: {
            AccessKey: "8a33c20e-0109-4607-abaa79d555ff-4289-4917",
          },
        };
        const reso = await fetch(url, options);
        const jso = await reso.json();
        const result = jso;
        if (result.HttpCode == 201) {
          resolve({ result: "success" });
        } else {
          reject({ result: "failed" });
        }
      }
    });
  });

  res.json(formPromise);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
