import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "7oj4rub2",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production"
});

export const config = {
    projectId: "7oj4rub2",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production"
};

export const urlFor = (source) => createImageUrlBuilder(config).image(source);