import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_APP_PROJECTID,
  dataset: import.meta.env.VITE_APP_SANITY_DATASET,
  token: import.meta.envVITE_APP_SANITY_TOKEN,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "1",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getPosts(Data) {
  let result;

  if (Data === "plans") {
    // console.log(Data);
    const query = `*[_type=="plans"]{_id,planTitle,planDays,planPrice,
                   planScreen,dailyDownloadLimit,slug,"planImage":planIcon.asset->url}`;
    result = await client.fetch(query);
    // console.log(result);
    return result;
  } else if (Data === "categories") {
    console.log(Data);
    const query = `*[_type=="catagories"]{_id,catagoryName,
                   "catagoryImage":catagoryImage.asset->url}`;
    result = await client.fetch(query);
    // console.log(result);
    return result;
  } else {
    const query = `*[_type=="news"]{newsTitle,newsLongDescription,newsShortDescription,
                   slug,"newsImage":newsImage.asset->url}`;
    result = await client.fetch(query);
    // console.log(result);
    return result;
  }
}

export async function createPost(Post) {
  const result = await client.create(Post);
  return result;
}

export async function updateDocument(_id, title, description) {
  const result = client.patch(_id).set({ title, description });
  return result;
}
