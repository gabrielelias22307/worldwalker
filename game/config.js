/* WORLDWALKER settings you can change
   SHEET_URL     – paste your Google Apps Script web app URL here (see apps-script/Code.gs) to save to the class Sheet.
                   Leave it '' and the game still saves in the browser and gives a Passport Code.
   TEACHER_CODE  – type this on the world map to open every episode for a student. */
window.WW_CONFIG = {
  SHEET_URL: '',
  TEACHER_CODE: 'ATLAS',
  OPEN_ALL: false   // true opens every episode on the world map from the start (used for the Netlify version)
};
