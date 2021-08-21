const api = require("cosmicjs")();
const bucket = api.bucket({
  slug: "future-greats-blog-production",
  read_key: process.env.COSMIC_BUCKET_READ_KEY,
});

export default bucket;
