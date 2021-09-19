export const getPageData = async (pagePath) => {
    console.log('page data url = ',`${process.env.BACK_END_URL}/api/posts/${pagePath[0]}`);
    const request
        = await fetch(`${process.env.BACK_END_URL}/api/posts/${pagePath[0]}`);
    const response = await request.json();
    return response.data;
};
export const getLatestPosts = async () => {
    const request
        = await fetch(`${process.env.BACK_END_URL}/api/posts/latest`);
    const response = await request.json();
    return response.data;
};
