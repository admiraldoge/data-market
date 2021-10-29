export const stringInputTemplate = {
  "_template" : "stringInput",
  "_templateName": "Pregunta simple",
  "_id" : "",
  "label" : {
    "_template": "string",
    "_templateName": "Pregunta",
    "value" : ""
  },
  "placeholder" : {
    "_template": "string",
    "_templateName": "Placeholder",
    "value" : ""
  },
  "page": {
    "_template": "number",
    "_templateName": "Página",
    "type": "natural",
    "value" : "0"
  },
}
export const checkBoxInputTemplate = {
  "_template" : "checkBoxInput",
  "_templateName": "Opción múltiple",
  "_id" : "",
  "label" : {
    "_template": "string",
    "_templateName": "Pregunta",
    "value" : ""
  },
  "options": {
    "_template": "array",
    "_templateName": "Opciones",
    "_itemTemplates": [
      "string"
    ],
    "expandable": true,
    "items": []
  },
  "page": {
    "_template": "number",
    "_templateName": "Página",
    "type": "natural",
    "value" : "0"
  },
}

export const inputTemplates = [stringInputTemplate, checkBoxInputTemplate];
