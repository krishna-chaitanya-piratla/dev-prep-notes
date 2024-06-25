import { Page } from "../types/Page"

export const dummy_page_01: Page = {
    metadata: {
      id: "001",
      link: "/test-page-01",
      linkName: "Test Page 01",
      pageType: "page"
    },
    title: {
      bannerUrl: "../assets/banners/banner.jpg",
      h4Text: "Test1",
      h2Text: "Test Page 01"
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
            contents: "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling.",
            id: "paragraph-001"
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



// export const dummy_page_02 = {
//     "metadata": {
//         "id": "002",
//         "link": "/test-page-02",
//         "linkName": "Test Page 02",
//         "pageType": "page"
//     },
//     "title": {
//         "bannerUrl": "../assets/banners/banner2.jpg",
//         "h4Text": "Test2",
//         "h2Text": "Test Page 02"
//     },
//     "contents": [
//         {
//             "type": "text",
//             "contents": [
//                 {
//                 "type": "h1",
//                 "contents": "This is Heading1 text"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "This is a simple paragraph text"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Condimentum vitae sapien pellentesque habitant morbi tristique. Sed libero enim sed faucibus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit. Rutrum quisque non tellus orci ac. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non consectetur a erat nam at. Cursus sit amet dictum sit amet justo donec. Euismod quis viverra nibh cras. Viverra adipiscing at in tellus integer. Arcu odio ut sem nulla pharetra diam sit amet. Dictum at tempor commodo ullamcorper a lacus vestibulum."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Cras ornare arcu dui vivamus arcu. A arcu cursus vitae congue. Consectetur libero id faucibus nisl. Morbi quis commodo odio aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor massa id neque aliquam vestibulum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Enim praesent elementum facilisis leo vel fringilla est. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam eleifend mi in nulla posuere."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Nisi scelerisque eu ultrices vitae auctor eu augue ut. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. A pellentesque sit amet porttitor eget dolor morbi. Amet risus nullam eget felis. Elementum tempus egestas sed sed. Tincidunt ornare massa eget egestas purus viverra accumsan. Et magnis dis parturient montes nascetur ridiculus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Venenatis urna cursus eget nunc scelerisque. Ultricies tristique nulla aliquet enim. Libero id faucibus nisl tincidunt eget nullam. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Felis donec et odio pellentesque diam volutpat. Proin fermentum leo vel orci porta non. Turpis nunc eget lorem dolor sed viverra ipsum. Imperdiet sed euismod nisi porta."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Rhoncus dolor purus non enim praesent elementum. Adipiscing diam donec adipiscing tristique risus nec feugiat. Donec ac odio tempor orci dapibus. Dis parturient montes nascetur ridiculus. Magna sit amet purus gravida quis blandit turpis. Magna fringilla urna porttitor rhoncus dolor purus non enim. Penatibus et magnis dis parturient montes. Magna fermentum iaculis eu non. Integer eget aliquet nibh praesent tristique magna sit. Accumsan lacus vel facilisis volutpat. Interdum consectetur libero id faucibus. Justo donec enim diam vulputate. Ut faucibus pulvinar elementum integer enim neque. Faucibus interdum posuere lorem ipsum dolor sit amet. Blandit aliquam etiam erat velit. Risus quis varius quam quisque id. Amet porttitor eget dolor morbi non arcu risus quis varius."
//                 },
//                 {
//                     "type": "h3",
//                     "contents": "Sub-sub-heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Posuere sollicitudin aliquam ultrices sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Fermentum et sollicitudin ac orci phasellus. Amet justo donec enim diam vulputate. Facilisis mauris sit amet massa vitae. At ultrices mi tempus imperdiet. Blandit massa enim nec dui nunc mattis enim ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Justo laoreet sit amet cursus sit amet dictum sit. Pretium viverra suspendisse potenti nullam ac tortor. Interdum varius sit amet mattis vulputate enim. Quam lacus suspendisse faucibus interdum. Enim ut sem viverra aliquet eget sit."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again and again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Hac habitasse platea dictumst quisque sagittis purus sit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Amet risus nullam eget felis eget nunc lobortis. Sed pulvinar proin gravida hendrerit lectus. Amet facilisis magna etiam tempor. Non nisi est sit amet facilisis magna. Massa id neque aliquam vestibulum morbi blandit cursus risus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. At lectus urna duis convallis convallis. Rhoncus dolor purus non enim. Felis eget velit aliquet sagittis id consectetur purus. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Imperdiet massa tincidunt nunc pulvinar sapien et. Fringilla est ullamcorper eget nulla facilisi. Quam elementum pulvinar etiam non quam. Lacus vel facilisis volutpat est velit egestas dui id. Fames ac turpis egestas maecenas. Suspendisse in est ante in nibh mauris cursus mattis. Quam id leo in vitae turpis massa sed. Sed velit dignissim sodales ut eu. Ipsum consequat nisl vel pretium. Aliquam sem fringilla ut morbi tincidunt augue interdum velit."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Tempus iaculis urna id volutpat lacus laoreet. Integer quis auctor elit sed vulputate. Pellentesque massa placerat duis ultricies lacus sed turpis. Sollicitudin tempor id eu nisl nunc. Volutpat odio facilisis mauris sit amet massa. Habitant morbi tristique senectus et netus. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Venenatis lectus magna fringilla urna porttitor. Lacinia quis vel eros donec ac odio tempor orci dapibus. Eu lobortis elementum nibh tellus molestie. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. A lacus vestibulum sed arcu. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices dui sapien eget mi proin sed libero enim sed.\n\nLeo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Last Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Leo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//             ]
//         },
//     ]
// }

// export const dummy_page_03 = {
//     "metadata": {
//         "id": "003",
//         "link": "/test-page-03",
//         "linkName": "Test Page 03",
//         "pageType": "page"
//     },
//     "title": {
//         "bannerUrl": "../assets/banners/banner3.webp",
//         "h4Text": "Test3",
//         "h2Text": "Test Page 03"
//     },
//     "contents": [
//         {
//             "type": "text",
//             "contents": [
//                 {
//                 "type": "h1",
//                 "contents": "This is Heading1 text"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Welcome to page 3."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Condimentum vitae sapien pellentesque habitant morbi tristique. Sed libero enim sed faucibus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit. Rutrum quisque non tellus orci ac. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non consectetur a erat nam at. Cursus sit amet dictum sit amet justo donec. Euismod quis viverra nibh cras. Viverra adipiscing at in tellus integer. Arcu odio ut sem nulla pharetra diam sit amet. Dictum at tempor commodo ullamcorper a lacus vestibulum."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Cras ornare arcu dui vivamus arcu. A arcu cursus vitae congue. Consectetur libero id faucibus nisl. Morbi quis commodo odio aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor massa id neque aliquam vestibulum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Enim praesent elementum facilisis leo vel fringilla est. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam eleifend mi in nulla posuere."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Nisi scelerisque eu ultrices vitae auctor eu augue ut. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. A pellentesque sit amet porttitor eget dolor morbi. Amet risus nullam eget felis. Elementum tempus egestas sed sed. Tincidunt ornare massa eget egestas purus viverra accumsan. Et magnis dis parturient montes nascetur ridiculus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Venenatis urna cursus eget nunc scelerisque. Ultricies tristique nulla aliquet enim. Libero id faucibus nisl tincidunt eget nullam. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Felis donec et odio pellentesque diam volutpat. Proin fermentum leo vel orci porta non. Turpis nunc eget lorem dolor sed viverra ipsum. Imperdiet sed euismod nisi porta."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Rhoncus dolor purus non enim praesent elementum. Adipiscing diam donec adipiscing tristique risus nec feugiat. Donec ac odio tempor orci dapibus. Dis parturient montes nascetur ridiculus. Magna sit amet purus gravida quis blandit turpis. Magna fringilla urna porttitor rhoncus dolor purus non enim. Penatibus et magnis dis parturient montes. Magna fermentum iaculis eu non. Integer eget aliquet nibh praesent tristique magna sit. Accumsan lacus vel facilisis volutpat. Interdum consectetur libero id faucibus. Justo donec enim diam vulputate. Ut faucibus pulvinar elementum integer enim neque. Faucibus interdum posuere lorem ipsum dolor sit amet. Blandit aliquam etiam erat velit. Risus quis varius quam quisque id. Amet porttitor eget dolor morbi non arcu risus quis varius."
//                 },
//                 {
//                     "type": "h3",
//                     "contents": "Sub-sub-heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Posuere sollicitudin aliquam ultrices sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Fermentum et sollicitudin ac orci phasellus. Amet justo donec enim diam vulputate. Facilisis mauris sit amet massa vitae. At ultrices mi tempus imperdiet. Blandit massa enim nec dui nunc mattis enim ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Justo laoreet sit amet cursus sit amet dictum sit. Pretium viverra suspendisse potenti nullam ac tortor. Interdum varius sit amet mattis vulputate enim. Quam lacus suspendisse faucibus interdum. Enim ut sem viverra aliquet eget sit."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again and again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Hac habitasse platea dictumst quisque sagittis purus sit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Amet risus nullam eget felis eget nunc lobortis. Sed pulvinar proin gravida hendrerit lectus. Amet facilisis magna etiam tempor. Non nisi est sit amet facilisis magna. Massa id neque aliquam vestibulum morbi blandit cursus risus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. At lectus urna duis convallis convallis. Rhoncus dolor purus non enim. Felis eget velit aliquet sagittis id consectetur purus. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Imperdiet massa tincidunt nunc pulvinar sapien et. Fringilla est ullamcorper eget nulla facilisi. Quam elementum pulvinar etiam non quam. Lacus vel facilisis volutpat est velit egestas dui id. Fames ac turpis egestas maecenas. Suspendisse in est ante in nibh mauris cursus mattis. Quam id leo in vitae turpis massa sed. Sed velit dignissim sodales ut eu. Ipsum consequat nisl vel pretium. Aliquam sem fringilla ut morbi tincidunt augue interdum velit."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Tempus iaculis urna id volutpat lacus laoreet. Integer quis auctor elit sed vulputate. Pellentesque massa placerat duis ultricies lacus sed turpis. Sollicitudin tempor id eu nisl nunc. Volutpat odio facilisis mauris sit amet massa. Habitant morbi tristique senectus et netus. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Venenatis lectus magna fringilla urna porttitor. Lacinia quis vel eros donec ac odio tempor orci dapibus. Eu lobortis elementum nibh tellus molestie. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. A lacus vestibulum sed arcu. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices dui sapien eget mi proin sed libero enim sed.\n\nLeo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Last Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Leo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//             ]
//         },
//     ]
// }

// export const dummy_page_04 = {
//     "metadata": {
//         "id": "004",
//         "link": "/sub-page-01",
//         "linkName": "Test SubPage 01",
//         "pageType": "page",
//         "parentId": "001"
//     },
//     "title": {
//         "bannerUrl": "../assets/banners/banner4.webp",
//         "h4Text": "Test Sub-Page",
//         "h2Text": "Test Sub Page 01"
//     },
//     "contents": [
//         {
//             "type": "text",
//             "contents": [
//                 {
//                 "type": "h1",
//                 "contents": "SubPage01"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Welcome to sub-page 01"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Condimentum vitae sapien pellentesque habitant morbi tristique. Sed libero enim sed faucibus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit. Rutrum quisque non tellus orci ac. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non consectetur a erat nam at. Cursus sit amet dictum sit amet justo donec. Euismod quis viverra nibh cras. Viverra adipiscing at in tellus integer. Arcu odio ut sem nulla pharetra diam sit amet. Dictum at tempor commodo ullamcorper a lacus vestibulum."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Cras ornare arcu dui vivamus arcu. A arcu cursus vitae congue. Consectetur libero id faucibus nisl. Morbi quis commodo odio aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor massa id neque aliquam vestibulum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Enim praesent elementum facilisis leo vel fringilla est. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam eleifend mi in nulla posuere."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Nisi scelerisque eu ultrices vitae auctor eu augue ut. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. A pellentesque sit amet porttitor eget dolor morbi. Amet risus nullam eget felis. Elementum tempus egestas sed sed. Tincidunt ornare massa eget egestas purus viverra accumsan. Et magnis dis parturient montes nascetur ridiculus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Venenatis urna cursus eget nunc scelerisque. Ultricies tristique nulla aliquet enim. Libero id faucibus nisl tincidunt eget nullam. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Felis donec et odio pellentesque diam volutpat. Proin fermentum leo vel orci porta non. Turpis nunc eget lorem dolor sed viverra ipsum. Imperdiet sed euismod nisi porta."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Rhoncus dolor purus non enim praesent elementum. Adipiscing diam donec adipiscing tristique risus nec feugiat. Donec ac odio tempor orci dapibus. Dis parturient montes nascetur ridiculus. Magna sit amet purus gravida quis blandit turpis. Magna fringilla urna porttitor rhoncus dolor purus non enim. Penatibus et magnis dis parturient montes. Magna fermentum iaculis eu non. Integer eget aliquet nibh praesent tristique magna sit. Accumsan lacus vel facilisis volutpat. Interdum consectetur libero id faucibus. Justo donec enim diam vulputate. Ut faucibus pulvinar elementum integer enim neque. Faucibus interdum posuere lorem ipsum dolor sit amet. Blandit aliquam etiam erat velit. Risus quis varius quam quisque id. Amet porttitor eget dolor morbi non arcu risus quis varius."
//                 },
//                 {
//                     "type": "h3",
//                     "contents": "Sub-sub-heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Posuere sollicitudin aliquam ultrices sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Fermentum et sollicitudin ac orci phasellus. Amet justo donec enim diam vulputate. Facilisis mauris sit amet massa vitae. At ultrices mi tempus imperdiet. Blandit massa enim nec dui nunc mattis enim ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Justo laoreet sit amet cursus sit amet dictum sit. Pretium viverra suspendisse potenti nullam ac tortor. Interdum varius sit amet mattis vulputate enim. Quam lacus suspendisse faucibus interdum. Enim ut sem viverra aliquet eget sit."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again and again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Hac habitasse platea dictumst quisque sagittis purus sit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Amet risus nullam eget felis eget nunc lobortis. Sed pulvinar proin gravida hendrerit lectus. Amet facilisis magna etiam tempor. Non nisi est sit amet facilisis magna. Massa id neque aliquam vestibulum morbi blandit cursus risus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. At lectus urna duis convallis convallis. Rhoncus dolor purus non enim. Felis eget velit aliquet sagittis id consectetur purus. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Imperdiet massa tincidunt nunc pulvinar sapien et. Fringilla est ullamcorper eget nulla facilisi. Quam elementum pulvinar etiam non quam. Lacus vel facilisis volutpat est velit egestas dui id. Fames ac turpis egestas maecenas. Suspendisse in est ante in nibh mauris cursus mattis. Quam id leo in vitae turpis massa sed. Sed velit dignissim sodales ut eu. Ipsum consequat nisl vel pretium. Aliquam sem fringilla ut morbi tincidunt augue interdum velit."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Tempus iaculis urna id volutpat lacus laoreet. Integer quis auctor elit sed vulputate. Pellentesque massa placerat duis ultricies lacus sed turpis. Sollicitudin tempor id eu nisl nunc. Volutpat odio facilisis mauris sit amet massa. Habitant morbi tristique senectus et netus. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Venenatis lectus magna fringilla urna porttitor. Lacinia quis vel eros donec ac odio tempor orci dapibus. Eu lobortis elementum nibh tellus molestie. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. A lacus vestibulum sed arcu. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices dui sapien eget mi proin sed libero enim sed.\n\nLeo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Last Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Leo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//             ]
//         },
//     ]
// }

// export const dummy_page_05 = {
//     "metadata": {
//         "id": "005",
//         "link": "/sub-sub-page-01",
//         "linkName": "Test SubSubPage 01",
//         "pageType": "page",
//         "parentId": "004"
//     },
//     "title": {
//         "h4Text": "Test Sub-Sub-Page",
//         "h2Text": "Test Sub Sub Page 01"
//     },
//     "contents": [
//         {
//             "type": "text",
//             "contents": [
//                 {
//                 "type": "h1",
//                 "contents": "SubSubPage01"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Welcome to sub-sub-page 01"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "This is a paragraph text with some <i>italic</i>, <b>bold</b>, <u>underline</u>, and some <em>emphasis</em> styling."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. At auctor urna nunc id cursus metus aliquam. Suscipit adipiscing bibendum est ultricies. Ac auctor augue mauris augue neque gravida in. Proin libero nunc consequat interdum varius. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Morbi tempus iaculis urna id volutpat lacus laoreet non. Adipiscing tristique risus nec feugiat in fermentum posuere. Nibh sit amet commodo nulla facilisi. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis. Quam nulla porttitor massa id. Risus nec feugiat in fermentum posuere urna nec tincidunt."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Condimentum vitae sapien pellentesque habitant morbi tristique. Sed libero enim sed faucibus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit. Rutrum quisque non tellus orci ac. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non consectetur a erat nam at. Cursus sit amet dictum sit amet justo donec. Euismod quis viverra nibh cras. Viverra adipiscing at in tellus integer. Arcu odio ut sem nulla pharetra diam sit amet. Dictum at tempor commodo ullamcorper a lacus vestibulum."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again"
//                 },
//                 {
//                     "type": "h2",
//                     "contents": "Sub-Heading again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Cras ornare arcu dui vivamus arcu. A arcu cursus vitae congue. Consectetur libero id faucibus nisl. Morbi quis commodo odio aenean. Risus at ultrices mi tempus imperdiet nulla malesuada. Porttitor massa id neque aliquam vestibulum. Integer feugiat scelerisque varius morbi enim nunc faucibus. Enim praesent elementum facilisis leo vel fringilla est. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam eleifend mi in nulla posuere."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Nisi scelerisque eu ultrices vitae auctor eu augue ut. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. A pellentesque sit amet porttitor eget dolor morbi. Amet risus nullam eget felis. Elementum tempus egestas sed sed. Tincidunt ornare massa eget egestas purus viverra accumsan. Et magnis dis parturient montes nascetur ridiculus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Venenatis urna cursus eget nunc scelerisque. Ultricies tristique nulla aliquet enim. Libero id faucibus nisl tincidunt eget nullam. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Felis donec et odio pellentesque diam volutpat. Proin fermentum leo vel orci porta non. Turpis nunc eget lorem dolor sed viverra ipsum. Imperdiet sed euismod nisi porta."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Rhoncus dolor purus non enim praesent elementum. Adipiscing diam donec adipiscing tristique risus nec feugiat. Donec ac odio tempor orci dapibus. Dis parturient montes nascetur ridiculus. Magna sit amet purus gravida quis blandit turpis. Magna fringilla urna porttitor rhoncus dolor purus non enim. Penatibus et magnis dis parturient montes. Magna fermentum iaculis eu non. Integer eget aliquet nibh praesent tristique magna sit. Accumsan lacus vel facilisis volutpat. Interdum consectetur libero id faucibus. Justo donec enim diam vulputate. Ut faucibus pulvinar elementum integer enim neque. Faucibus interdum posuere lorem ipsum dolor sit amet. Blandit aliquam etiam erat velit. Risus quis varius quam quisque id. Amet porttitor eget dolor morbi non arcu risus quis varius."
//                 },
//                 {
//                     "type": "h3",
//                     "contents": "Sub-sub-heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Posuere sollicitudin aliquam ultrices sagittis. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Fermentum et sollicitudin ac orci phasellus. Amet justo donec enim diam vulputate. Facilisis mauris sit amet massa vitae. At ultrices mi tempus imperdiet. Blandit massa enim nec dui nunc mattis enim ut. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Justo laoreet sit amet cursus sit amet dictum sit. Pretium viverra suspendisse potenti nullam ac tortor. Interdum varius sit amet mattis vulputate enim. Quam lacus suspendisse faucibus interdum. Enim ut sem viverra aliquet eget sit."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Another Heading again and again"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Hac habitasse platea dictumst quisque sagittis purus sit. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Amet risus nullam eget felis eget nunc lobortis. Sed pulvinar proin gravida hendrerit lectus. Amet facilisis magna etiam tempor. Non nisi est sit amet facilisis magna. Massa id neque aliquam vestibulum morbi blandit cursus risus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. At lectus urna duis convallis convallis. Rhoncus dolor purus non enim. Felis eget velit aliquet sagittis id consectetur purus. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Imperdiet massa tincidunt nunc pulvinar sapien et. Fringilla est ullamcorper eget nulla facilisi. Quam elementum pulvinar etiam non quam. Lacus vel facilisis volutpat est velit egestas dui id. Fames ac turpis egestas maecenas. Suspendisse in est ante in nibh mauris cursus mattis. Quam id leo in vitae turpis massa sed. Sed velit dignissim sodales ut eu. Ipsum consequat nisl vel pretium. Aliquam sem fringilla ut morbi tincidunt augue interdum velit."
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Tempus iaculis urna id volutpat lacus laoreet. Integer quis auctor elit sed vulputate. Pellentesque massa placerat duis ultricies lacus sed turpis. Sollicitudin tempor id eu nisl nunc. Volutpat odio facilisis mauris sit amet massa. Habitant morbi tristique senectus et netus. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Venenatis lectus magna fringilla urna porttitor. Lacinia quis vel eros donec ac odio tempor orci dapibus. Eu lobortis elementum nibh tellus molestie. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. A lacus vestibulum sed arcu. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices dui sapien eget mi proin sed libero enim sed.\n\nLeo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//                 {
//                     "type": "h1",
//                     "contents": "Last Heading"
//                 },
//                 {
//                     "type": "p",
//                     "contents": "Leo integer malesuada nunc vel risus. Arcu dictum varius duis at consectetur lorem donec. Quis viverra nibh cras pulvinar. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Aliquam sem et tortor consequat. Adipiscing commodo elit at imperdiet dui accumsan. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Magna eget est lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Arcu risus quis varius quam quisque id diam vel. Ipsum a arcu cursus vitae congue mauris rhoncus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Sit amet facilisis magna etiam. Arcu non sodales neque sodales ut etiam sit amet."
//                 },
//             ]
//         },
//     ]
// }

// export const data: Page[] = [dummy_page_01, dummy_page_02, dummy_page_03, dummy_page_04, dummy_page_05]

export const data: Page[] = [dummy_page_01];