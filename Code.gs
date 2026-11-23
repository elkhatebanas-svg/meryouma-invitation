const SPREADSHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Responses";

function doPost(e) {
  const p = (e && e.parameter) || {};
  const to = String(p.to || "").trim().slice(0, 80);
  const from = String(p.from || "").trim().slice(0, 80);
  const plan = String(p.plan || "").trim().slice(0, 200);
  const when = String(p.when || "").trim().slice(0, 100);
  const where = String(p.where || "").trim().slice(0, 200);
  const answer = String(p.answer || "").trim();
  const chosenTime = String(p.chosen_time || "").trim();

  if (!to || !from || !["YES", "NO"].includes(answer)) {
    return ContentService.createTextOutput("Invalid response");
  }
  if (answer === "YES" && !["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].includes(chosenTime)) {
    return ContentService.createTextOutput("A valid time choice is required");
  }
  if (answer === "NO" && chosenTime !== "") {
    return ContentService.createTextOutput("Unexpected time choice");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Timestamp", "To", "From", "Answer", "Chosen time", "Plan", "When", "Where"]);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), to, from, answer, chosenTime, plan, when, where]);
    return ContentService.createTextOutput("OK");
  } finally {
    lock.releaseLock();
  }
}
