export const downloadCollectorSubmission = (collectorId) => {
  const url = `${process.env.BACK_END_URL}/reports/collectors/${collectorId}/submissions/csv`
  window.open(url);
};

export const readUserReport = async (userId) => {
  const request = await fetch(`${process.env.BACK_END_URL}/reports/users/${userId}`);
  const response = await request.json();
  return response;
};

export const readCollectorReport = async (collectorId) => {
  const request = await fetch(`${process.env.BACK_END_URL}/reports/collectors/${collectorId}/submissions`);
  const response = await request.json();
  return response;
};

export const readFormReport = async (formId) => {
  const request = await fetch(`${process.env.BACK_END_URL}/reports/forms/${formId}`);
  const response = await request.json();
  return response;
};
