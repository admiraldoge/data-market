export const getPageData = async (pagePath) => {
    console.log('page data url = ',`${process.env.BACK_END_URL}/api/pages/render_data?`+ new URLSearchParams({
        path: pagePath
    }));
    const request
        = await fetch(`${process.env.BACK_END_URL}/api/pages/render_data?`+ new URLSearchParams({
        path: pagePath
        })
    );
    const response = await request.json();
    return response.data;
};
export const getPageDataWithQuery = async (query) => {
    console.log('page data url = ',`${process.env.BACK_END_URL}/api/pages/render_data?`+ new URLSearchParams(query));
    const request
        = await fetch(`${process.env.BACK_END_URL}/api/pages/render_data?`+ new URLSearchParams(query));
    const response = await request.json();
    return response.data;
};
