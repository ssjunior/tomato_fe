// import filters from "./filters";
// import editView from "./editView";
// import listView from "./listView";
// import newView from "./newView";

const routes = [
  {
    moduleId: "sample",
    admin: false,
    authenticated: false,
    path: "/",
    layout: "Default",
    view: "List",
  },
];

export const sample = {
  routes,
  id: "source",
  name: "Sample",
  endpoint: "/sample",
  icon: "Email",
  // filters: filters,
  // edit: editView,
  // list: listView,
  // newSchema: newView
};
