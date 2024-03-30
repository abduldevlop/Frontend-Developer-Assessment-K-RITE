import {
  disney,
  evernote,
  google,
  intercon,
  invisionapp_logo,
  mailchimp,
  microsoft,
  paypal_logo,
  profile,
  shopify,
  wix,
} from "../assets";

export const floders = [
  {
    id: 1,
    name: "Products",
    items: [
      { id: 1, title: "Roadmap" },
      { id: 2, title: "Feedback" },
      { id: 3, title: "Performance" },
      { id: 4, title: "Team" },
      { id: 5, title: "Analyies" },
    ],
  },
  {
    id: 2,
    name: "Sales",
    items: [],
  },
  {
    id: 3,
    name: "Design",
    items: [],
  },
  {
    id: 4,
    name: "Office",
    items: [],
  },
  {
    id: 5,
    name: "Legal",
    items: [],
  },
];

export const tableData = [
  {
    id: 1,
    brand: {
      title: "Wix",
      image: wix, // Path to the brand image
      isChecked: false, // Boolean value for checkbox
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
      { id: 4, img: profile },
      { id: 5, img: profile },
    ],
    categories: [{ title: "Automation", color: "E5DBF3" }],

    tags: ["Digital transform"],
    nextMeeting: {
      time: "in 30 minutes",
      color: "D8EFE4", // Example color for next meeting
    },
  },

  {
    id: 2,
    brand: {
      title: "Shopify",
      image: shopify,
      isChecked: false,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
      { id: 4, img: profile },
    ],
    categories: [
      { title: "Ecommerce", color: "F6F0E2" },
      { title: "B2B", color: "FAF7D3" },
    ],

    tags: ["Digital transform"],
    nextMeeting: {
      time: "Tomorrow",
      color: "DAF1F6",
    },
  },

  {
    id: 3,
    brand: {
      title: "MailChimp",
      image: mailchimp,
      isChecked: false,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
      { id: 4, img: profile },
      { id: 5, img: profile },
    ],
    categories: [
      { title: "SASS", color: "DDF3E8" },
      { title: "Mobile", color: "F4F4D7" },
    ],

    tags: ["Tech inovations"],
    nextMeeting: {
      time: "Tomorrow",
      color: "DAF1F6",
    },
  },

  {
    id: 4,
    brand: {
      title: "PayPal",
      image: paypal_logo,
      isChecked: true,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
    ],
    categories: [{ title: "Merkateplace", color: "DDF3E8" }],

    tags: ["By sell online"],
    nextMeeting: {
      time: "In 6 hours",
      color: "D8EFE4",
    },
  },
  {
    id: 5,
    brand: {
      title: "Disney",
      image: disney,
      isChecked: false,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
    ],
    categories: [
      { title: "B2B", color: "CFC38F" },
      { title: "B2C", color: "F8FBCF" },
    ],

    tags: ["Business pernership"],
    nextMeeting: {
      time: "No content",
      color: "FEECEC",
    },
  },

  {
    id: 6,
    brand: {
      title: "Intercon",
      image: intercon,
      isChecked: true,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
      { id: 4, img: profile },
      { id: 5, img: profile },
    ],
    categories: [
      { title: "Technology", color: "E5EBFC" },
      { title: "SASS", color: "E0FCE7" },
    ],

    tags: ["Smart finance"],
    nextMeeting: {
      time: "in 1 hour",
      color: "E1F7ED",
    },
  },

  {
    id: 7,
    brand: {
      title: "Google",
      image: google,
      isChecked: false,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
      { id: 4, img: profile },
      { id: 5, img: profile },
      { id: 6, img: profile },
    ],
    categories: [
      { title: "Finance", color: "FAF2CE" },
      { title: "Automation", color: "F5EDFF" },
    ],

    tags: ["Smart finance"],
    nextMeeting: {
      time: "in 30 minutes",
      color: "E1F7ED",
    },
  },

  {
    id: 8,
    brand: {
      title: "Evernote",
      image: evernote,
      isChecked: true,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
    ],
    categories: [{ title: "Transportaion", color: "F8F0C8" }, ,],

    tags: ["logistictech"],
    nextMeeting: {
      time: "Next month",
      color: "E1E1E2",
    },
  },

  {
    id: 9,
    brand: {
      title: "Microsoft",
      image: microsoft,
      isChecked: false,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
      { id: 3, img: profile },
      { id: 4, img: profile },
      { id: 5, img: profile },
    ],
    categories: [
      { title: "Publishing", color: "E2C6D9" },
      { title: "B2C", color: "E2EABA" },
    ],

    tags: ["B2CMerketing"],
    nextMeeting: {
      time: "No content",
      color: "F6DFDE",
    },
  },

  {
    id: 10,
    brand: {
      title: "Invision",
      image: invisionapp_logo,
      isChecked: false,
    },
    description: "Lorem ipsum dolor sit.",
    members: [
      { id: 1, img: profile },
      { id: 2, img: profile },
    ],
    categories: [{ title: "Web Services", color: "DAEEF6" }, ,],

    tags: ["APIintrecation"],
    nextMeeting: {
      time: "Next month",
      color: "F5F5F7",
    },
  },
];
