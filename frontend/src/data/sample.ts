import { Page } from "../types/Page"

export const page_with_code_blocks: Page = {
    metadata: {
      id: "001",
      link: "/test-page-01",
      linkName: "Page With Code Blocks",
      pageType: "page"
    },
    title: {
      bannerUrl: "../assets/banners/banner3.webp",
      h4Text: "Test1",
      h2Text: "Page With Code Blocks"
    },
    contents: [
      {
        type: "text",
        contents: [
          {
            type: "h1",
            contents: "This is Heading1 text",
            id: "heading1-001"
          },
          {
            type: "p",
            contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
            id: "paragraph-001"
          },
          {
            type: "p",
            contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, <code>variable</code>, and some <em>emphasis</em> styling.",
            id: "paragraph-001"
          },

          {
            type: "code-block",
            contents: [
              {
                type: "html",
                contents: "<p>Hello from codeblock world</p>\n<p>Another Hello from codeblock world</p>"
              }
            ],
            id: "codeblock-html-001"
          },
          {
            type: "code-block",
            contents: [
              {
                type: "css",
                contents: "p {\n  color: red;\n}\n"
              }
            ],
            id: "codeblock-css-001"
          },
          {
            type: "code-block",
            contents: [
              {
                type: "javascript",
                contents: "const abcd = 123;\n"
              }
            ],
            id: "codeblock-js-001"
          },
          {
            type: "p",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt.",
            id: "paragraph-002"
          },
        ]
      },
    ]
}

export const page_with_callout_boxes: Page = {
  metadata: {
    id: "002",
    link: "/test-page-02",
    linkName: "Page with Callout Boxes",
    pageType: "page"
  },
  title: {
    bannerUrl: "../assets/banners/banner4.webp",
    h4Text: "Test2",
    h2Text: "Page with Callout Boxes"
  },
  contents: [
    {
      type: "text",
      contents: [
        {
          type: "h1",
          contents: "This is Heading1 text",
          id: "heading1-001"
        },
        {
          type: "p",
          contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt.",
          id: "paragraph-002"
        },
        {
          type: "h2",
          contents: "This is an informative Callout Box",
          id: "heading2-001"
        },
        {
          type: "callout-box",
          boxType: "info",
          collapsedByDefault: true,
          collapsedTitle: 'What is hidden here? Take a guess',
          title: "This is a long long title that is being written unnecessarily to keep testing how the component handles long title text",
          contents: [
            {
              type: "p",
              contents: "here is paragraph",
              id: "callout-paragraph-001"
            },
            {
              type: "h3",
              contents: "This is a heading3",
              id: "callout-heading3-001"
            },
            {
              type: "p",
              contents: "This is some more text",
              id: "callout-paragraph-002"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "html",
                  contents: "<p>Hello codeblock within a callout-box world</p>\n"
                }
              ],
              id: "callout-codeblock-html-001"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "css",
                  contents: "p {\n  color: red;\n}\n"
                }
              ],
              id: "callout-codeblock-css-001"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "javascript",
                  contents: "const abcd = 123;\n"
                }
              ],
              id: "callout-codeblock-js-001"
            }
          ],
          id: "calloutbox-001"
        },
        {
          type: "h2",
          contents: "This is a warning Callout Box",
          id: "heading2-002"
        },
        {
          type: "callout-box",
          collapsedByDefault: false,
          boxType: "warning",
          title: "Beware of winter storms!",
          contents: [
            {
              type: "p",
              contents: "here is paragraph",
              id: "callout-paragraph-003"
            },
            {
              type: "h3",
              contents: "This is a heading3",
              id: "callout-heading3-002"
            },
            {
              type: "p",
              contents: "This is some more text",
              id: "callout-paragraph-004"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "html",
                  contents: "<p>Hello codeblock within a callout-box world</p>\n"
                }
              ],
              id: "callout-codeblock-html-002"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "css",
                  contents: "p {\n  color: red;\n}\n"
                }
              ],
              id: "callout-codeblock-css-002"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "javascript",
                  contents: "const abcd = 123;\n"
                }
              ],
              id: "callout-codeblock-js-002"
            },
            {
              type: "p",
              contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt.",
              id: "paragraph-002"
            },
          ],
          id: "calloutbox-002"
        },
        {
          type: "p",
          contents: "Cras ornare arcu dui vivamus arcu. A arcu cursus vitae congue. Consectetur libero id faucibus nisl. Morbi quis commodo odio aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor massa id neque aliquam vestibulum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Enim praesent elementum facilisis leo vel fringilla est. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam eleifend mi in nulla posuere.",
          id: "paragraph-003"
        },
      ]
    },
  ]
}

export const page_with_lists: Page = {
  metadata: {
    id: "003",
    link: "/test-page-03",
    linkName: "Page with Ordered and Unordered Lists",
    pageType: "page"
  },
  title: {
    bannerUrl: "../assets/banners/banner4.webp",
    h4Text: "Test3",
    h2Text: "Page with Lists"
  },
  contents: [
    {
      type: "text",
      contents: [
        {
          type: "h1",
          contents: "This is Heading1 text",
          id: "heading1-001"
        },

        {
          type: "unordered-list",
          contents: [
            {
              type: "unordered-list-item",
              contents: "First item",
              id: "list-item-001",
              subItems: [
                {
                  type: "unordered-list-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  subItems: [
                    {
                      type: "unordered-list-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003"
                    }
                  ]
                }
              ]
            },
            {
              type: "unordered-list-item",
              contents: "Second item",
              id: "list-item-004"
            }
          ]
        },

        {
          type: "ordered-list",
          depthNumbering: true,
          contents: [
            {
              type: "ordered-list-item",
              contents: "First item",
              id: "list-item-001",
              subItems: [
                {
                  type: "ordered-list-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  subItems: [
                    {
                      type: "ordered-list-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003"
                    }
                  ]
                }
              ]
            },
            {
              type: "ordered-list-item",
              contents: "Second item",
              id: "list-item-004"
            }
          ]
        },

        {
          type: "ordered-list",
          depthNumbering: false,
          contents: [
            {
              type: "ordered-list-item",
              contents: "First item",
              id: "list-item-001",
              subItems: [
                {
                  type: "ordered-list-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  subItems: [
                    {
                      type: "ordered-list-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003"
                    }
                  ]
                }
              ]
            },
            {
              type: "ordered-list-item",
              contents: "Second item",
              id: "list-item-004"
            }
          ]
        },
        
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, <code>variable</code>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
      ]
    },
  ]
}

export const page_with_checklists: Page = {
  metadata: {
    id: "004",
    link: "/test-page-04",
    linkName: "Page with Checklists",
    pageType: "page"
  },
  title: {
    bannerUrl: "../assets/banners/banner4.webp",
    h4Text: "Test3",
    h2Text: "Page with Checklists"
  },
  contents: [
    {
      type: "text",
      contents: [
        {
          type: "h1",
          contents: "This is Heading1 text",
          id: "heading1-001"
        },

        {
          type: "checklist",
          contents: [
            {
              type: "checklist-item",
              contents: "First item",
              id: "checklist-item-001",
              completed: false,
              subItems: [
                {
                  type: "checklist-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  completed: false,
                  subItems: [
                    {
                      type: "checklist-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003",
                      completed: false,
                    },
                    {
                      type: "checklist-item",
                      contents: "Sub-sub-item 2",
                      id: "list-item-004",
                      completed: false,
                    }
                  ]
                }
              ]
            },
            {
              type: "checklist-item",
              contents: "Last item",
              id: "checklist-item-001",
              completed: true,
            }
          ]
        },

        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, <code>variable</code>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "html",
              contents: "<p>Hello from codeblock world</p>\n<p>Hello from codeblock world</p>"
            }
          ],
          id: "codeblock-html-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "css",
              contents: "p {\n  color: red;\n}\n"
            }
          ],
          id: "codeblock-css-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "javascript",
              contents: "const abcd = 123;\n"
            }
          ],
          id: "codeblock-js-001"
        },
      ]
    },
  ]
}


export const page_with_tables: Page = {
  metadata: {
    id: "005",
    link: "/test-page-05",
    linkName: "Page with Table",
    pageType: "page"
  },
  title: {
    bannerUrl: "../assets/banners/banner4.webp",
    h4Text: "Test4",
    h2Text: "Page with Table"
  },
  contents: [
    {
      type: "text",
      contents: [
        {
          type: "h1",
          contents: "This is Heading1 text",
          id: "heading1-001"
        },

        {
          "type": "table",
          "id": "table-001",
          "contents": [
            {
              "type":"column-headers",
              "contents": ["Box Name", "Items in Box", "Verified?"],
              "columnTypes": ["Alphanumeric", "Number", "Boolean"]
            },
            {
              "type": "table-row",
              "contents": ["Red", 3, true]
            },
            {
              "type": "table-row",
              "contents": ["Green", 4, true]
            },
            {
              "type": "table-row",
              "contents": ["Blue", "2", true]
            },
            {
              "type": "table-row",
              "contents": ["White", "9", true]
            },
            {
              "type": "table-row",
              "contents": ["Mystery", "99", false]
            },
          ]
        },

        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, <code>variable</code>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "html",
              contents: "<p>Hello from codeblock world</p>\n<p>Hello from codeblock world</p>"
            }
          ],
          id: "codeblock-html-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "css",
              contents: "p {\n  color: red;\n}\n"
            }
          ],
          id: "codeblock-css-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "javascript",
              contents: "const abcd = 123;\n"
            }
          ],
          id: "codeblock-js-001"
        },
      ]
    },
  ]
}

export const page_with_spreadsheet: Page = {
  metadata: {
    id: "006",
    link: "/test-page-06",
    linkName: "Page with Spreadsheet",
    pageType: "page"
  },
  title: {
    bannerUrl: "../assets/banners/banner4.webp",
    h4Text: "Spreadsheet",
    h2Text: "Page with Spreadsheet"
  },
  contents: [
    {
      type: "text",
      contents: [
        {
          type: "h1",
          contents: "This page contains a Spreadsheet component",
          id: "heading1-001"
        },

        {
          "type": "spreadsheet",
          "id": "spreadsheet-001",
          "contents": {
            "columns": [
              { "columnId": "col1", "width": 150 },
              { "columnId": "col2", "width": 150 },
              { "columnId": "col3", "width": 150 }
            ],
            "rows": [
              {
                "rowId": "row1",
                "cells": [
                  { "type": "text", "text": "A1", "columnId": "col1" },
                  { "type": "text", "text": "B1", "columnId": "col2" },
                  { "type": "text", "text": "C1", "columnId": "col3" }
                ]
              },
              {
                "rowId": "row2",
                "cells": [
                  { "type": "text", "text": "A2", "columnId": "col1" },
                  { "type": "text", "text": "B2", "columnId": "col2" },
                  { "type": "text", "text": "C2", "columnId": "col3" }
                ]
              }
            ]
          }
        },

        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, <code>variable</code>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "html",
              contents: "<p>Hello from codeblock world</p>\n<p>Hello from codeblock world</p>"
            }
          ],
          id: "codeblock-html-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "css",
              contents: "p {\n  color: red;\n}\n"
            }
          ],
          id: "codeblock-css-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "javascript",
              contents: "const abcd = 123;\n"
            }
          ],
          id: "codeblock-js-001"
        },
      ]
    },
  ]
}

export const dummy_page_04: Page = {
  metadata: {
    id: "002",
    link: "/test-page-02",
    linkName: "Page with Callout Boxes",
    pageType: "page"
  },
  title: {
    bannerUrl: "../assets/banners/banner4.webp",
    h4Text: "Test2",
    h2Text: "Page with Callout Boxes"
  },
  contents: [
    {
      type: "text",
      contents: [
        {
          type: "h1",
          contents: "This is Heading1 text",
          id: "heading1-001"
        },

        {
          type: "unordered-list",
          contents: [
            {
              type: "unordered-list-item",
              contents: "First item",
              id: "list-item-001",
              subItems: [
                {
                  type: "unordered-list-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  subItems: [
                    {
                      type: "unordered-list-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003"
                    }
                  ]
                }
              ]
            },
            {
              type: "ordered-list-item",
              contents: "Second item",
              id: "list-item-004"
            }
          ]
        },

        {
          type: "ordered-list",
          depthNumbering: true,
          contents: [
            {
              type: "ordered-list-item",
              contents: "First item",
              id: "list-item-001",
              subItems: [
                {
                  type: "ordered-list-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  subItems: [
                    {
                      type: "ordered-list-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003"
                    }
                  ]
                }
              ]
            },
            {
              type: "ordered-list-item",
              contents: "Second item",
              id: "list-item-004"
            }
          ]
        },

        {
          type: "ordered-list",
          depthNumbering: false,
          contents: [
            {
              type: "ordered-list-item",
              contents: "First item",
              id: "list-item-001",
              subItems: [
                {
                  type: "ordered-list-item",
                  contents: "Sub-item 1",
                  id: "list-item-002",
                  subItems: [
                    {
                      type: "ordered-list-item",
                      contents: "Sub-sub-item 1",
                      id: "list-item-003"
                    }
                  ]
                }
              ]
            },
            {
              type: "ordered-list-item",
              contents: "Second item",
              id: "list-item-004"
            }
          ]
        },
        
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },
        {
          type: "p",
          contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, <code>variable</code>, and some <em>emphasis</em> styling.",
          id: "paragraph-001"
        },

        {
          type: "code-block",
          contents: [
            {
              type: "html",
              contents: "<p>Hello from codeblock world</p>\n<p>Hello from codeblock world</p>"
            }
          ],
          id: "codeblock-html-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "css",
              contents: "p {\n  color: red;\n}\n"
            }
          ],
          id: "codeblock-css-001"
        },
        {
          type: "code-block",
          contents: [
            {
              type: "javascript",
              contents: "const abcd = 123;\n"
            }
          ],
          id: "codeblock-js-001"
        },
        {
          type: "p",
          contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt.",
          id: "paragraph-002"
        },
        {
          type: "h3",
          contents: "This is an informative Callout Box",
          id: "heading2-001"
        },
        {
          type: "callout-box",
          boxType: "info",
          collapsedByDefault: true,
          collapsedTitle: 'What is hidden here? Take a guess',
          title: "This is a long long title that is being written unnecessarily to keep testing how the component handles long title text",
          contents: [
            {
              type: "p",
              contents: "here is paragraph",
              id: "callout-paragraph-001"
            },
            {
              type: "h3",
              contents: "This is a heading3",
              id: "callout-heading3-001"
            },
            {
              type: "p",
              contents: "This is some more text",
              id: "callout-paragraph-002"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "html",
                  contents: "<p>Hello codeblock within a callout-box world</p>\n"
                }
              ],
              id: "callout-codeblock-html-001"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "css",
                  contents: "p {\n  color: red;\n}\n"
                }
              ],
              id: "callout-codeblock-css-001"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "javascript",
                  contents: "const abcd = 123;\n"
                }
              ],
              id: "callout-codeblock-js-001"
            }
          ],
          id: "calloutbox-001"
        },
        {
          type: "h2",
          contents: "This is a warning Callout Box",
          id: "heading2-002"
        },
        {
          type: "callout-box",
          collapsedByDefault: false,
          boxType: "warning",
          title: "Beware of winter storms!",
          contents: [
            {
              type: "p",
              contents: "here is paragraph",
              id: "callout-paragraph-003"
            },
            {
              type: "h3",
              contents: "This is a heading3",
              id: "callout-heading3-002"
            },
            {
              type: "p",
              contents: "This is some more text",
              id: "callout-paragraph-004"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "html",
                  contents: "<p>Hello codeblock within a callout-box world</p>\n"
                }
              ],
              id: "callout-codeblock-html-002"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "css",
                  contents: "p {\n  color: red;\n}\n"
                }
              ],
              id: "callout-codeblock-css-002"
            },
            {
              type: "code-block",
              contents: [
                {
                  type: "javascript",
                  contents: "const abcd = 123;\n"
                }
              ],
              id: "callout-codeblock-js-002"
            },
            {
              type: "p",
              contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt.",
              id: "paragraph-002"
            },
          ],
          id: "calloutbox-002"
        },
        {
          type: "p",
          contents: "Cras ornare arcu dui vivamus arcu. A arcu cursus vitae congue. Consectetur libero id faucibus nisl. Morbi quis commodo odio aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor massa id neque aliquam vestibulum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Enim praesent elementum facilisis leo vel fringilla est. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam eleifend mi in nulla posuere.",
          id: "paragraph-003"
        },
      ]
    },
  ]
}

export const data: Page[] = [page_with_code_blocks, page_with_callout_boxes, page_with_lists, page_with_checklists, page_with_tables, page_with_spreadsheet];