const BUCKET_READ_KEY = "7WzuoE6QQgAfcC7iPOcCzOiT7To7fxChNV0jKt6l7ScJ2hKVzN";

const api = require("cosmicjs")();
const bucket = api.bucket({
  slug: "future-greats-blog-production",
  read_key: BUCKET_READ_KEY,
});

export default bucket;
