import {
  defineStaticConfig,
  NumberFieldPlugin,
  TextFieldPlugin,
} from "tinacms";
// const defineStaticConfig = (obj) => obj;
import React from "react";
// import * as ReactIs from "react-is";

// console.log("isit?", ReactIs.isValidElementType("div"));

export default defineStaticConfig({
  branch: "main",
  clientId: "302d953f-2fdf-449a-88ac-b75ee95f6ac1",
  token: "7c852f1d6d6e7486c1051f0d1f6bdf44bbf724f4",
  build: {
    outputFolder: "tina",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        name: "test",
        path: "content/test",
        label: "Test",
        templates: [
          {
            name: "tem1",
            label: "Template 1",
            fields: [
              {
                type: "string",
                name: "foo",
                ui: NumberFieldPlugin,
              },
              {
                type: "string",
                name: "fooj",
              },
            ],
          },
          {
            name: "tem2",
            label: "Template 2",
            fields: [{ type: "string", name: "bar" }],
          },
        ],
      },
      {
        name: "page",
        path: "content/page",
        label: "Page",
        format: "mdx",
        fields: [
          {
            label: "Title",
            name: "Title",
            type: "string",
            ui: {
              // defaultValue: 'Title',
              // Examples of how you COULD use a custom form
              // component: ({ form, field, input }) => {
              //   return (
              //     <div>
              //       <label>This is a test</label>
              //       <input {...input}></input>
              //     </div>
              //   )
              // },
              // validate: (val) => {
              //   if (val?.length > 5) {
              //     return 'Too Long!!!'
              //   }
              // },
            },
          },
          {
            name: "body",
            label: "Main Content",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
      {
        label: "Blog Posts",
        name: "post",
        path: "content/post",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            ui: {
              component: () => <div className="bg-blue-600">Well hi</div>,
            },
          },
          {
            type: "object",
            label: "Related Posts",
            name: "posts",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
            },
            fields: [
              {
                name: "post",
                type: "reference",
                collections: ["post", "page"],
              },
              {
                name: "label",
                type: "string",
              },
            ],
          },
          {
            type: "object",
            label: "Something",
            name: "foo",
            fields: [
              {
                name: "bar",
                label: "Bar",
                type: "string",
              },
            ],
          },
          {
            type: "string",

            label: "Topic",
            name: "topic",
            options: ["programming", "blacksmithing"],
            list: true,
          },
          {
            type: "rich-text",
            label: "Blog Post Body",
            name: "body",
            isBody: true,
            templates: [
              {
                name: "Gallery",
                label: "Gallery",
                fields: [
                  {
                    label: "Images",
                    name: "images",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        type: "image",
                        name: "src",
                        label: "Source",
                      },
                      {
                        type: "string",
                        name: "width",
                        label: "Width",
                      },
                      {
                        type: "string",
                        name: "height",
                        label: "Height",
                      },
                    ],
                  },
                  {
                    type: "string",
                    name: "alignment",
                    label: "Alignment",
                    options: ["left", "center", "right"],
                  },
                  {
                    type: "string",
                    name: "gap",
                    label: "Gap",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
