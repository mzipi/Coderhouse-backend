import normalizr from "normalizr";

const normalize = normalizr.normalize;
const desnormalize = normalizr.denormalize;
const schema = normalizr.schema;
const originalData = "MongoDB"

const user = new schema.Entity("users");
const comment = new schema.Entity("comments", {
    commenter: user
});
const msg = new schema.Entity("msgs", {
    author: user,
    comments: [comment]
});
const posts = new schema.Entity("posts", {
    posts: [msg]
})

const normalizeData = normalize(originalData, posts);
desnormalize(normalizeData.result, posts, normalizeData.entities);