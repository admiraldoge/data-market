export const stringInputTemplate = {
  "_template" : "stringInput",
  "_templateName": "Pregunta simple",
  "id" : "",
  "label" : {
    "_template": "string",
    "_templateName": "Pregunta",
    "value" : ""
  },
  "placeholder" : {
    "_template": "string",
    "_templateName": "Placeholder",
    "value" : ""
  }
}
export const checkBoxInputTemplate = {
  "_template" : "checkBoxInput",
  "_templateName": "Opción múltiple",
  "id" : "",
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
  }
}

export const inputTemplates = [stringInputTemplate, checkBoxInputTemplate];
