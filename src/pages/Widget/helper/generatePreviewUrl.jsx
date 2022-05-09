const generatePreviewUrl = (shopifyObject, settings, type) => {
  const location = window.location;
  const href = window.location.href;
  const search = window.location.search;

  let url = '';
  let disablePreviewbar = '&pb=0';
  let generatedUrl = '';

  if (search && !search.includes('key')) {
    url = href + '&preview_theme_id=';
  } else if (search.includes('key')) {
    url = location.origin + location.pathname + '?preview_theme_id=';
  } else {
    url = href + '?preview_theme_id=';
  }

  if (type === "preview") {
    if (settings.disablePreviewbar) {
      generatedUrl = url + shopifyObject.theme.id + disablePreviewbar;
      navigator.clipboard.writeText(generatedUrl);
      return generatedUrl;
    } else {
      generatedUrl = url + shopifyObject.theme.id;
      navigator.clipboard.writeText(generatedUrl);
      return generatedUrl;
    }
  } else if (type === "editor") {
    if (settings.disablePreviewbar) {
      generatedUrl = url + shopifyObject.theme.id + disablePreviewbar;
      navigator.clipboard.writeText(generatedUrl);
    } else {
      generatedUrl = url + shopifyObject.theme.id;
      navigator.clipboard.writeText(generatedUrl);
    }
    const editorGeneratedUrl = 'https://' + shopifyObject.shop + '/admin/themes/' + shopifyObject.theme.id + '/editor';
    return navigator.clipboard.writeText(`Theme Name: ${shopifyObject.theme.name}\nPreview Link: ${generatedUrl}\nEditor Link: ${editorGeneratedUrl}`);
  }
};

export default generatePreviewUrl;
