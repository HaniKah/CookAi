import * as contentful from "contentful";

// connection to contetful api for creators
export const client = contentful.createClient({
  accessToken: process.env.REACT_APP_ACCES_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});

export const edamam = () => {
  const appKey = process.env.APP_KEY;
  const appId = process.env.APP_ID;
};
