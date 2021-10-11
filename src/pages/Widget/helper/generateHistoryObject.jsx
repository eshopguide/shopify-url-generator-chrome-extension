const generateHistoryObject = (shopifyObject, history, url) => {
  const prevHistory = history;
  const theme = shopifyObject.theme;
  const location = window.location;

  const historyObject = {
    shop: shopifyObject.shop.replace('.myshopify.com', ''),
    id: theme.id,
    name: theme.name,
    role: theme.role,
    url: url,
    pathname: location.pathname,
  };

  if (!prevHistory.some((item) => item.url === url)) {
    prevHistory.push(historyObject);
    return [...prevHistory];
  } else {
    return [...history];
  }
};

export default generateHistoryObject;
