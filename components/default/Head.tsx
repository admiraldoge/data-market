import React from "react";
import Header from "next/head";
import {imageType, stringType} from "../../statics/types";
type HeaderProps = {
	title: stringType,
	description: stringType,
	robots: stringType,
	image: imageType
	url?: string
}


/*


<meta name="twitter:card" content="summary" key="twcard" />
<meta name="twitter:creator" content={twitterHandle} key="twhandle" />

<meta property="og:url" content={currentURL} key="ogurl" />
<meta property="og:image" content={previewImage} key="ogimage" />
<meta property="og:site_name" content={siteName} key="ogsitename" />
<meta property="og:title" content={pageTitle} key="ogtitle" />
<meta property="og:description" content={description} key="ogdesc" />


*/
const Head: React.FunctionComponent<HeaderProps>
	= ({
		   title,
		   description,
		   robots,
		   image,
		   url= "",

	}) => {

	return (
		<div>
			<Header>
				<title>{title.value}</title>
				<meta name="description" content={description.value}/>
				<meta name="twitter:card" content="summary" key="twcard" />

				<meta property="og:url" content={url}/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content={image.src} key="ogimage" />
				<meta property="og:image:alt" content={image.alt} key="ogimagealt" />
				<meta property="og:site_name" content={"Embol"} key="ogsitename" />
				<meta property="og:title" content={title.value} key="ogtitle" />
				<meta property="og:description" content={description.value} key="ogdesc" />
				<meta property="og:locale" content="es_LA" key="oglocale" />
			</Header>
		</div>
	)
}
 export default Head;
