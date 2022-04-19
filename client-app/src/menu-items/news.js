// third-party
import { FormattedMessage } from "react-intl";

// assets
import { IconNews } from "@tabler/icons";

// constant
const icons = {
  IconNews
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const news = {
  id: "news",
  title: <FormattedMessage id="news" />,
  type: "group",
  children: [
      {
          id: "News",
          title: <FormattedMessage id="News" />,
          type: "item",
          url: "/news/news-contents",
          icon: icons.IconNews,
          breadcrumbs: false,
        },
        {
          id: "News Unapproved",
          title: <FormattedMessage id="News Unapproved" />,
          type: "item",
          url: "/news/news-unapproved",
          icon: icons.IconNews,
          breadcrumbs: false,
        },
  ],
};

export default news;
