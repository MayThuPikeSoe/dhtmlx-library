// const structure = [
//   {
//     id: "other",
//     icon: "mdi mdi-menu",
//     type: "button",
//     view: "link",
//     circle: true,
//     color: "secondary",
//   },
//   {
//     id: "add",
//     icon: "mdi mdi-plus",
//     value: "Add",
//   },
//   {
//     type: "separator",
//   },
//   {
//     id: "language",
//     value: "Language",
//     items: [
//       {
//         id: "eng",
//         value: "English",
//       },
//       {
//         id: "spa",
//         value: "Spanish",
//       },
//       {
//         id: "rus",
//         value: "Russian",
//       },
//       {
//         id: "de",
//         value: "Deutsch",
//       },
//     ],
//   },
//   {
//     id: "skin",
//     value: "Skin",
//     items: [
//       {
//         id: "material",
//         value: "Material",
//       },
//       {
//         id: "skyblue",
//         value: "Skyblue",
//       },
//       {
//         id: "web",
//         value: "Web",
//       },
//       {
//         id: "terrace",
//         value: "Terrace",
//       },
//     ],
//   },
//   {
//     type: "separator",
//   },
//   {
//     id: "edit",
//     value: "Edit",
//   },
//   {
//     type: "spacer",
//   },
//   {
//     id: "search",
//     type: "input",
//     placeholder: "Search",
//     icon: "mdi mdi-magnify",
//   },
//   {
//     type: "spacer",
//   },
//   {
//     id: "left",
//     icon: "dxi dxi-format-align-left",
//     group: "align",
//   },
//   {
//     id: "center",
//     active: true,
//     icon: "dxi dxi-format-align-center",
//     group: "align",
//   },
//   {
//     id: "right",
//     icon: "dxi dxi-format-align-right",
//     group: "align",
//   },
//   {
//     type: "spacer",
//   },
//   {
//     id: "notifications",
//     icon: "mdi mdi-bell",
//     tooltip: "Notifications",
//     count: 7,
//     type: "button",
//     view: "link",
//     color: "secondary",
//     circle: true,
//   },
//   {
//     id: "setting",
//     icon: "mdi mdi-tune",
//     tooltip: "Setting",
//     type: "button",
//     view: "link",
//     color: "secondary",
//     circle: true,
//   },
//   {
//     id: "avatar",
//     type: "imageButton",
//     src: "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_14.jpg",
//   },
// ];

// const toolbar = new dhx.Toolbar("toolbar", {
//   css: "toolbar_template_a",
//   data: structure,
// });

// toolbar.disable(["edit"]);

// table

// const grid = new dhx.Grid("grid", {
//   columns: [
//     { id: "project", header: [{ text: "Project" }] },
//     {
//       id: "owner",
//       header: [{ text: "Owner" }],
//       editorType: "combobox",
//       options: [
//         "Louise Fisher",
//         "Daniel Peterson",
//         "Fred Duncan",
//         "Michael Rice",
//         "Andrew Stewart",
//         "Martin Thompson",
//         "Mark Harper",
//       ],
//       minWidth: 160,
//     },
//     {
//       id: "renewals",
//       header: [{ text: "Number of renewals" }],
//       type: "string",
//       editorType: "multiselect",
//       options: ["1 time", "1-2 times", "more than 5 times"],
//       minWidth: 260,
//     },
//     { id: "paid", header: [{ text: "Paid" }], type: "boolean" },
//     {
//       id: "start_date",
//       header: [{ text: "Start date" }],
//       type: "date",
//       format: "%d/%m/%Y",
//     },
//     {
//       id: "end_date",
//       header: [{ text: "End date" }],
//       type: "date",
//       format: "%d/%m/%Y",
//     },
//   ],
//   // data,
//   editable: true,
//   adjust: true,
// });

// grid.events.on("cellClick", function (row, column) {
//   if (column.id != "paid") grid.edit(row.id, column.id);
// });

// side bar2
const sidebar = new dhx.Sidebar("sidebar", {
  css: "dhx_widget--border_right",
});

sidebar.data
  .load("https://snippet.dhtmlx.com/codebase/data/sidebar/01/dataset.json")
  .then(function () {
    sidebar.data.add(
      {
        id: "toggle",
        css: "toggle-button",
        icon: "mdi mdi-backburger",
      },
      sidebar.data.getIndex("dashboard")
    );

    sidebar.data.add(
      {
        type: "customHTML",
        id: "userInfo",
        css: "user-info_item",
        html:
          "<div class='user-info_container'>" +
          "<img class='user-info_avatar' src='https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_62.jpg'/>" +
          "<div class='user-info_title'>" +
          "Gloria McKinney" +
          "</div>" +
          "<div class='user-info_contact'>" +
          "@gmckinney" +
          "</div>" +
          "</div>",
      },
      sidebar.data.getIndex("dashboard")
    );
  });

sidebar.events.on("click", function (id) {
  if (id === "toggle") {
    const toggleItem = sidebar.data.getItem("toggle");

    sidebar.toggle();

    if (sidebar.config.collapsed) {
      toggleItem.icon = "mdi mdi-menu";
    } else {
      toggleItem.icon = "mdi mdi-backburger";
    }
  }
});

// folder

const dataset = [
  
  {
    value: "Books",
    id: "Books",
    opened: true,
    items: [
      {
        value: "Thrillers",
        id: "Thrillers",
        opened: true,
        items: [
          {
            value: "Bestsellers",
            id: "Bestsellers",
            items: [
              {
                value: "Lawrence Block",
                id: "Lawrence Block",
              },
            ],
          },
          {
            value: "Robert Crais",
            id: "Robert Crais",
          },
          {
            value: "Ian Rankin",
            id: "Ian Rankin",
          },
        ],
      },
      {
        value: "History",
        id: "History",
        items: [
          {
            value: "John Mack Faragher",
            id: "John Mack Faragher",
          },
          {
            value: "Jim Dwyer",
            id: "Jim Dwyer",
          },
          {
            value: "Larry Schweikart",
            id: "Larry Schweikart",
          },
          {
            value: "R. Lee Ermey",
            id: "R. Lee Ermey",
          },
        ],
      },
    ],
  },
  {
    value: "Magazines",
    id: "Magazines",
    open: true,
    items: [
      {
        value: "Sport",
        id: "Sport",
      },
    ],
  },
];

const tree = new dhx.Tree("tree", {
  css: "dhx_tree-custom",
  // iconset: "font_awesome",

  template: ({ value }, isFolder) => {
    const template = `
      <div class="dhx_tree_template">
        <span class="dhx_tree_template__value">${value}</span>   

        <div class="dhx_tree_template__rows">
          <button class="dhx_tree_template__button remove">
            <i class="far fa-trash-alt dhx_tree_template__icon dhx_tree_template__icon--danger"></i>
          </button>
        </div>
      </div>
    `;
    return;
    template;
  },
  eventHandlers: {
    onclick: {
      remove: (event, { id }) => {
        id && tree.data.remove(id);
      },
    },
  },
});

// tree.setItemIcons("Books", {
//   folder_opened: "icon_opened_folder", // CSS class for open folder icon
//   folder_closed: "icon_closed_folder", // CSS class for closed folder icon
// });

tree.data.parse(dataset);
