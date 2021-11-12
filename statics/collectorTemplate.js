export const collectorTemplate = {
  "deadline": "",
  "formId": "",
  "url": "",
  "name": "",
  "__v": 0,
  "public": true,
  "fillPoints": {
    "value": 0,
    "_templateName": "Puntos al llenar",
    "_template": "number",
  },
  "sharePoints": {
    "value": 0,
    "_templateName": "Puntos al compartir",
    "_template": "number",
  },
}

export const newCollectorTemplate = (formId, name, deadline, isPublic, fillPoints, sharePoints) => {
  let template = JSON.parse(JSON.stringify(collectorTemplate));
  template.formId = formId;
  template.name = name;
  template.deadline = deadline;
  template.url = `http://localhost:3000/c/${formId}`;
  template.public = isPublic;
  template.fillPoints.value = parseInt(fillPoints);
  template.sharePoints.value = parseInt(sharePoints);
  return template;
}
export default newCollectorTemplate;
