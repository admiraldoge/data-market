export const getGeneratedPreSignedPutUrl = async (extension) => {
    let params =  new URLSearchParams({
        extension: extension
    });
    const req = await fetch(
      `${process.env.BACK_END_URL}/api/s3/cvFileUrl?${params}`,
      {
          method: "GET"
      });
    const response = await req.json();

  return response.data;
}

export const uploadFileToS3 = async (preSignedUrl, file) => {
  const res = await fetch(
      preSignedUrl,
      {
          method: "PUT",
          body: file
      });
  console.log('AWS Upload res: ',res);
};
