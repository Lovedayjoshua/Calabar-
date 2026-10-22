// Paste this into Extensions > Apps Script in your Google Sheet.
function doPost(e) {
  var sheet = SpreadsheetApp.openById('1GmwaWI11T4MGeTtftNe-cLu7WyVSYqNNzWiGKrdpW9U').getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Role', 'Name', 'Email', 'Address']);
  }
  var p = e.parameter;
  // Prevent spreadsheet formula injection
  function clean(v) { v = String(v || '').slice(0, 500); return /^[=+\-@]/.test(v) ? "'" + v : v; }
  sheet.appendRow([new Date(), clean(p.role), clean(p.name), clean(p.email), clean(p.address)]);
  return ContentService.createTextOutput('ok');
}
