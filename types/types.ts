export type baseComponentType = {
	"_template": string,
	"_templateName": string,
	"urlName": string
}
export type imageType = {
	src: string,
	alt?: string,
	mimeType?: string
}
export type stringType = {
	value: string
}
export type richTextType = {
	value: string
}
export type booleanType = {
	value: boolean
}
export type buttonType = {
	label: string,
	url: string,
	style: {},
	icon: boolean
}
export type documentType = {
	src: string
}
export type productCategoryType = {
	name: stringType,
	urlName: stringType,
	products: productType[]
}
export type iconType = {
	name: string
}
export type linkType = {
	label: string,
	url: string
}
export type colorType = {
	value: string
}
export type relatedProductType = {
	productUrl: stringType
}
export type productType = {
	active: boolean,
	images: imageType[],
	color: colorType,
	name: stringType,
	urlName: stringType,
	bestSeller: booleanType,
	description: richTextType,
	buyButton: buttonType,
	varieties: productVarietyType[],
	bigMessage: {
		figure: imageType,
		message: stringType
	},
	relatedProducts: relatedProductType[],
	categoryUrlName?: stringType
}
export type productVarietyType = {
	name: stringType,
	image: imageType,
	presentations: productPresentationType[]

}
export type productPresentationType = {
	name: stringType,
	sizes: productSizeType[]

}
export type productSizeType = {
	name: stringType,
	image: imageType,
	productImage: imageType,
	characteristicsTitle: stringType,
	characteristicsImage: imageType,
	buyButton: buttonType,
	warningMessage: richTextType,
}
export type announcementType = {
	title: stringType,
	text1: richTextType,
	subTitle: stringType,
	text2: richTextType,
	button: buttonType,
	icon: iconType
}
export type clientCardType = {
	icon: iconType,
	title: stringType,
	description: richTextType,
	button: buttonType
}
export type listItemType = {
	title: stringType,
	description: richTextType
}
export type form1FieldType = {
	placeholder: string,
	key: string
}
export type questionType = {
	question: stringType,
	answer: richTextType
}
export type questionsCategory = {
	urlName: string,
	image: imageType,
	name: stringType,
	questions: questionType[]
}
export type whoWeAreCardItemType = {
	image: imageType,
	title: stringType,
	description: richTextType
}
export type hireProcessStepType = {
	image: imageType,
	title: stringType,
	description: richTextType
}
export type positionType = {
	title: stringType,
	description: richTextType,
	location: stringType,
	button: buttonType
}
export type iceBoxMachineTabItem = {
	_template: string;
	name: stringType,
	urlName: stringType,
	icon: iconType,
	title: stringType,
	text1: richTextType,
	listTitle: stringType,
	iceBoxMachineList: listItemType[],
	subTitle: stringType,
	text2: richTextType,
	technicalSupport: technicalSupportType
}
export type officeType = {
	name: stringType,
	title: stringType,
	location: stringType,
	phone: stringType
}
export type departmentType = {
	name: stringType,
	urlName: stringType,
	offices: officeType[]
}
export type technicalSupportType = {
	departments: departmentType[]
}
export type topicType = {
	image: imageType,
	title: stringType,
	description: richTextType
}
export type historyPointType = {
	image: imageType,
	title: stringType,
	subTitle: stringType,
	description: richTextType
}
export type numberType = {
	value: number
}
export type kpiType = {
	image: imageType,
	quantity: numberType,
	bigExtra: stringType,
	smallExtra: stringType,
	description: stringType
}
export type urlType = {
	label: string,
	url: string,
	color: string
}
export type awardType = {
	image: imageType,
	title: stringType,
	description: richTextType,
	link: urlType
}
export type documentUrl = {
	label: stringType,
	documentFile: documentType
}
export type indicatorType = {
	quantity: numberType,
	goal: numberType,
	bigSuffix: stringType,
	smallSuffix: stringType
}
export type rseSectionItemType = {
	title: stringType,
	description: richTextType,
	quantity: numberType,
	goal: numberType,
	bigSuffix: stringType,
	smallSuffix: stringType
}
export type rseKpiType = {
	image: imageType,
	prefix: stringType,
	quantity: numberType,
	bigSuffix: stringType,
	smallSuffix: stringType,
	description: stringType
}
export type videoType = {
	src: string,
	mimeType: string,
	thumbnail: imageType
}
export type rseTabItemType = {
	name: stringType,
	image: imageType,
	sections: rseSectionItemType[],
	kpis: {
		title: stringType,
		rseKpiItems: rseKpiType[]
	},
	video: videoType,
	document: {
		title: stringType,
		description: richTextType,
		button: buttonType,
		documentFile: documentType
	},
	partners: {
		title: stringType,
		partnersItems: partnersType[]
	}
}
export type partnersType = {
	image: imageType,
	url: stringType
}
export type contactUsOfficeItem = {
	name: stringType,
	location: stringType,
	phone: stringType,
	schedule: stringType,
	coordinates: {
		lat: number,
		lng: number
	}
}
export type contactUsDepartmentType = {
	name: stringType,
	urlName: string,
	coordinates: {
		lat: number,
		lng: number
	}
	departmentOffices: contactUsOfficeItem[]
}
export type carousel2ItemType = {
	image: imageType,
	title: stringType,
	description: richTextType,
	warningImage: imageType,
	warningMessage: richTextType
}
export type commitmentType = {
	title: stringType,
	description: richTextType,
	backgroundImage: imageType,
	hoverImage: imageType,
	url: stringType
}
export type offerType = {
	image: imageType,
	title: stringType,
	description: richTextType,
	button: buttonType,
	warningImage: imageType,
	warningMessage: richTextType
}
export type complexPieChartType = {
	image: imageType,
	percentage: numberType,
	title: stringType,
	description: stringType
}
export type bubbleImage = {
	image: imageType
}
export type doubleBubbleImage = {
	image1: {
		image: imageType,
		title: stringType,
		url: stringType
	},
	image2: {
		image: imageType,
		title: stringType,
		url: stringType
	}
}
export type impactType = {
	image: imageType,
	title: stringType,
	subTitle: stringType,
	description: richTextType,
	//carousel: complexPieChartType[]|bubbleImage[]|doubleBubbleImage[]
	impactCarousel1?: complexPieChartType[],
	impactCarousel2?: bubbleImage[],
	impactCarousel3?: doubleBubbleImage[],
}

export type dateType = {
	value: string
}

export type vacancyType = {
	id: number,
	date: string,
	link: string,
	status: string,
	title: {
		rendered: string
	},
	content: {
		rendered: string
	},
	excerpt: {
		rendered: string
	},
	_job_location: string
}

export type rseSliderItem = {
	image: imageType,
	title: stringType,
	description: richTextType,
	indicators: indicatorType[],
	button: buttonType,
	bubble: rseSliderBubbleType
}

export type rseSliderBubbleType = {
	number: numberType,
	bubbleImage: imageType,
	iconImage: imageType
}
//FORM INPUTS
export type stringInput = {
	label: stringType,
	placeholder: stringType,
	isRequired: booleanType,
	logic: any
}