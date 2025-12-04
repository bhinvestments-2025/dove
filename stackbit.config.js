import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ["content"],

            models: [
                {
                    name: "Property",
                    type: "data",
                    filePath: "content/properties/{slug}.md",
                    urlPath: "/properties/{slug}",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "body", type: "markdown" },
                        { name: "location", type: "string" },
                        { name: "price", type: "string" },
                        { name: "image", type: "string" }
                    ]
                },

                {
                    name: "Page",
                    type: "data",
                    filePath: "content/pages/{slug}.md",
                    urlPath: "/{slug}",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "body", type: "markdown" }
                    ]
                }
            ]
        })
    ]
});
