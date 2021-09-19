import {getGeneratedPreSignedPutUrl, uploadFileToS3} from "./s3";

export const sendEmail = async (email) => {
    const request
        = await fetch(
            `${process.env.BACK_END_URL}/api/email`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(email)
        });
    const response = await request.json();
    return response.data;
};
export const sendCvEmail = async (email) => {
    if(email.cv) {
        let fileExtension = email.cv.type.split('/')[1];
        //console.log('File extension: ',fileExtension);
        let fileInformation = await getGeneratedPreSignedPutUrl(fileExtension);
        //console.log('File information: ',fileInformation);
        let awsRes = uploadFileToS3(fileInformation.preSignedUrl, email.cv);
        email.cv = fileInformation.fileUrl;
    }
    const request
        = await fetch(
        `${process.env.BACK_END_URL}/api/email`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(email)
        });
    const response = await request.json();
    return response.data;
};
