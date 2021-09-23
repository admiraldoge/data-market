import React from "react";
import styles from "/styles/Footer.module.scss";
import {stringType} from "../../types/types";
import Grid from "@material-ui/core/Grid";
import {useRouter} from "next/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
type FooterProps = {
	links: [],
	copyrightMessage: stringType,
	socialNetworkTitle : stringType,
	socialNetworks : [],
	callCenterTitle : stringType,
	callCenterNumber : stringType,
	contactUsTitle : stringType,
}

const Footer: React.FunctionComponent<FooterProps> = ({links, copyrightMessage, socialNetworkTitle, socialNetworks, callCenterTitle, callCenterNumber, contactUsTitle}) => {
	const router = useRouter();
	const ifSmall = useMediaQuery('(max-width:600px)');
	const imageMap = {
		"facebook": "/small/facebook.svg",
		"instagram": "/small/instagram.svg",
		"whatsapp": "/small/whatsapp.svg",
		"youtube": "/small/youtube.svg",
		"linkedin": "/small/linkedin.svg"
	} as any;

	const linksComponents = links.map((link:any, idx) => {
		return (
			<Grid
				key={idx}
				container direction={"row"}
				style={{color: link.color}} className={styles.link}
				onClick={(e) => onClick(e,link)}
			>
				{link.label}
			</Grid>
		)
	})

	const onClick = (e:any, entity:any) => {
		e.preventDefault();
		router.push(entity.url);
	}

	const whatsAppSocialNetwork = (socialNetworks.filter((socialNetwork:any) => socialNetwork.type === "whatsapp"))[0] as any;

	const socialNetworksComponents = socialNetworks.map((socialNetwork:any, idx) => {
		if(socialNetwork.type === "whatsapp") return null;
		return (
			<img
				key={idx}
				src={imageMap[socialNetwork.type]}
				alt={socialNetwork.type}
				className={styles.socialNetworkLogo}
				onClick={(e) => onClick(e,socialNetwork)}
			/>
		)
	})

	if(ifSmall) {
		return (
			<div className={styles.ctn}>
				<Grid container direction="row" justify={"center"}>
					<Grid item xs={11}>
						<Grid container direction="row" justify={"flex-start"}>
							<Grid container direction="row" justify={"flex-start"} className={styles.smallIcon}>
								<img src={'/small/embolLogoNegative.svg'} alt={"embol negative logo"}/>
							</Grid>
							{linksComponents}
						</Grid>
						<Grid container direction={"row"} style={{marginBottom: "40px"}}>
							<Grid item xs={6}>
								<Grid container direction="row" justify={"flex-start"} className={styles.rightSideTitle}>
									{callCenterTitle.value}
								</Grid>
								<Grid container direction="row" justify={"flex-start"} className={styles.rightSideData}>
									<span style={{cursor: "pointer"}}><a href={`tel:${callCenterNumber.value}`}>{callCenterNumber.value}</a></span>
								</Grid>
							</Grid>
							<Grid item xs={6}>
								<Grid container direction="row" justify={"flex-start"} className={styles.rightSideTitle}>
									{contactUsTitle.value}
								</Grid>
								<Grid container direction="row" justify={"flex-start"}>
									<a href={`${whatsAppSocialNetwork.url}`}>
										<img src={'/small/whatsapp.svg'} alt="whatsapp" className={styles.socialNetworkLogo}/>
									</a>
								</Grid>
							</Grid>
						</Grid>
						<Grid container direction="row" justify={"flex-start"} className={styles.rightSideTitle}>
							{socialNetworkTitle.value}
						</Grid>
						<Grid container direction={"row"} style={{marginBottom: "54px"}}>
							{socialNetworksComponents}
						</Grid>
						<Grid container direction="row" justify={"flex-start"} className={styles.copyright}>
							{copyrightMessage.value}
						</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}

	return (
		<div className={styles.ctn}>
			<Grid container direction="row">
				<Grid item xs={12} sm={6}>
					<div className={styles.leftSideCtn}>
						<Grid container direction="row" justify={"flex-start"} className={styles.smallIcon}>
							<img src={'/small/embolLogoNegative.svg'} alt={"embol negative logo"}
							     style={{cursor: "pointer"}}
								onClick={(e) => {
									router.push("/");
								}}
							/>
						</Grid>
						{linksComponents}
						<Grid container direction="row" justify={"flex-start"} className={styles.copyright}>
							{copyrightMessage.value}
						</Grid>
					</div>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div className={styles.rightSideCtn}>
						<Grid container direction="row" justify={"flex-start"} className={styles.rightSideTitle}>
							{socialNetworkTitle.value}
						</Grid>
						<Grid container direction={"row"} className={styles.rightSideData}>
							{socialNetworksComponents}
						</Grid>
						<Grid container direction="row" justify={"flex-start"} className={styles.rightSideTitle}>
							{callCenterTitle.value}
						</Grid>
						<Grid container direction="row" justify={"flex-start"} className={styles.rightSideData}>
							<span style={{cursor: "pointer"}}><a href={`tel:${callCenterNumber.value}`}>{callCenterNumber.value}</a></span>
						</Grid>
						<Grid container direction="row" justify={"flex-start"} className={styles.rightSideTitle}>
							{contactUsTitle.value}
						</Grid>
						<Grid container direction="row" justify={"flex-start"}>
							<a href={`${whatsAppSocialNetwork.url}`}>
								<img src={'/small/whatsapp.svg'} alt="whatsapp" className={styles.socialNetworkLogo}/>
							</a>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}
 export default Footer;
