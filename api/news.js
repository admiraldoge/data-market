export const getPageData = async (pagePath) => {
    console.log('page data url = ',`${process.env.BACK_END_URL}/api/news/${pagePath[0]}`);
    const request
        = await fetch(`${process.env.BACK_END_URL}/api/news/${pagePath[0]}`);
    const response = await request.json();
    return response.data;
};
export const getLatestNews = async () => {
    const request
        = await fetch(`${process.env.BACK_END_URL}/api/news/latest`);
    const response = await request.json();
    return response.data;
};
