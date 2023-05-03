import * as contentful from "contentful";

// connection to contetful api for creators
export const client = contentful.createClient({
  accessToken: 'wzappeuI9_bNiD5FbCdWdOsrvA-CQC3wpiwzSNHeWEc',
  space: 'hbi2916vb08c',
});

// connection to
export const edamam = () => {
  const appKey = process.env.REACT_APP_APP_KEY;
  const appId = process.env.REACT_APP_APP_ID;
};
