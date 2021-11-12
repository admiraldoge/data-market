export type imageType = {
	src: string,
	alt?: string,
	mimeType?: string
}
export type stringType = {
	value: string
}
export type numberType = {
	value: number
}
export type stringInputType = {
	template: string,
	_templateName: string,
	_id: string,
	label: stringType,
	placeholder: stringType,
	page: numberType
}

export type checkBoxInputType = {
	template: string,
	_templateName: string,
	_id: string,
	label: stringType,
	options: any,
	page: numberType
}
