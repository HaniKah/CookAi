import * as contentful from "contentful";

// connection to contetful api for creators
export const client = contentful.createClient({
  accessToken: process.env.REACT_APP_ACCES_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});

// connection to
export const edamam = () => {
  const appKey = process.env.REACT_APP_APP_KEY;
  const appId = process.env.REACT_APP_APP_ID;
};
