import * as contentful from "contentful";

// connection to contetful api for creators
export const client = contentful.createClient({
  accessToken: "wzappeuI9_bNiD5FbCdWdOsrvA-CQC3wpiwzSNHeWEc",
  space: "hbi2916vb08c",
});

export const edamam = () => {
  const appKey = process.env.APP_KEY;
  const appId = process.env.APP_ID;
};
