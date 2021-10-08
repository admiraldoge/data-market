export const collectorTemplate = {
  "deadline": "",
  "formId": "",
  "url": "",
  "name": "",
  "__v": 0,
  "public": true
}

export const newCollectorTemplate = (formId, name, deadline, isPublic) => {
  let template = JSON.parse(JSON.stringify(collectorTemplate));
  template.formId = formId;
  template.name = name;
  template.deadline = deadline;
  template.url = `http://localhost:3000/c/${formId}`;
  template.public = isPublic;
  return template;
}
export default newCollectorTemplate;
