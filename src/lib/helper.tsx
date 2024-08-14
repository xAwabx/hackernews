export const formatUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace("www.", "");
    const path = urlObj.pathname.split("/").filter(Boolean);
    const domainBreakDown = domain.split(".");

    if (domain === "github.com") {
      return `${domain}/${path[0]}`;
    } else if (domainBreakDown.length > 2) {
      return `${domainBreakDown[domainBreakDown.length - 2]}.${
        domainBreakDown[domainBreakDown.length - 1]
      }`;
    }
    return domain;
  } catch (error) {
    // console.error("Invalid URL:", url);
    return url;
  }
};
