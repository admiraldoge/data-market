export const getEditorValue = (editor, path) => {
  //console.log('Editor page data: ',editor.pageData);
  let obj = JSON.parse(JSON.stringify(editor.pageData));
  path.forEach(function (item) {
    obj = obj[item];
    //console.log('pageData[',item,'] =',obj);
  })
  //console.log('Editor listens to store: ',editor,'=>',obj);
  return obj;
}
export const getInformation = (obj) => {
    switch (obj._template) {
      case "hireProcessStep":
        return obj._templateName;
    }
    if(obj.title && obj.title.value) return obj.title.value;
    if(obj.label && obj.label.value) return obj.label.value; //For documents
    if(obj.name && obj.name.value) return obj.name.value; //For departments in contactUs
    if(obj.question && obj.question.value) return obj.question.value; //For questions in clients
    if(obj.productUrl && obj.productUrl.value) return obj.productUrl.value; //For related products
    if(obj._templateName) return obj._templateName;
    if(obj._template) return obj._template;
    if(obj.subTitle) return obj.subTitle.value;
    return false;
}

export const getInformationFromNonArray = (obj) => {
    if(obj.name && obj.name.value) return obj.name.value; //For departments in contactUs
    if(obj._templateName) return obj._templateName;
    if(obj._template) return obj._template;
    if(obj.title) return obj.title.value;
    if(obj.subTitle) return obj.subTitle.value;
    return false;
}
export const getSimpleEditorValue = (editor, path) => {
    let obj = JSON.parse(JSON.stringify(editor));
    path.forEach(function (item) {
        obj = obj[item];
        //console.log('pageData[',item,'] =',obj);
    })
    //console.log('Editor listens to store: ',editor,'=>',obj);
    return obj;
}
