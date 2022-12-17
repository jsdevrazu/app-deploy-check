const BASEURL = `https://registry.synque.ca/items/website_content?filter%5Bwebsite%5D%5B_eq%5D=gomain.io&filter%5Blanguage%5D%5B_contains%5D=zh-tw&filter%5Bparent_id%5D%5B_null%5D=true&fields=type,content,media.*,section,date_updated,children.type,children.content,children.section,children.media&sort%5B%5D=section&limit=2000`;

export const fetchContent = async () => {
  try {
    const data = await fetch(BASEURL).then((res) => res.json());
    return data?.data
  } catch (error) {
    return { error: error };
  }
};
