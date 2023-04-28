import * as contentful from "contentful";

// connection to contetful api for creator
export const client = contentful.createClient({
  accessToken: process.env.CONTENTEFUL_ACCES_TOKEN,
  space: process.env.CONTENTEFUL_SPACE_ID,
});

export const edamam = () => {
  const appKey = process.env.APP_KEY;
  const appId = process.env.APP_ID;
};
