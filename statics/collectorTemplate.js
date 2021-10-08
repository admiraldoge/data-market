export const formTemplate = {
  "tags": [],
  "fields": {
    "items": [],
    "expandable": true,
    "_itemTemplates": [
      "stringInput"
    ],
    "_templateName": "Campos del formulario",
    "_template": "array",
  },
  "thumbnail": {
    "mimeType": "png",
    "alt": "beast coast image",
    "src": "https://cdn1.dotesports.com/wp-content/uploads/2019/09/28180949/8eaf8e7803138282110a35e63effe900-e1624670401850.png",
    "_templateName": "Imagen del formulario",
    "_template": "image",
  },
  "name": {
    "value": "",
    "_templateName": "Nombre del formulario",
    "_template": "string",
  }
}

export const newFormTemplate = (name) => {
  let template = JSON.parse(JSON.stringify(formTemplate));
  template.name.value = name;
  return template;
}
export default newFormTemplate;
