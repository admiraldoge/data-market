export const downloadCollectorSubmission = (collectorId) => {
  const url = `${process.env.BACK_END_URL}/reports/collectors/${collectorId}/submissions/csv`
  window.open(url);
};
