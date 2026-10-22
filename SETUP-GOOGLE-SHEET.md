# Connect the form to your Google Sheet (keeps the sheet private)

1. Open your spreadsheet > Share > General access > set to **Restricted** (only you).
2. In the sheet: Extensions > Apps Script. Delete the default code, paste in google-apps-script.js, Save.
3. Deploy > New deployment > type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Authorize when asked, then copy the **Web app URL**.
5. Open partner.html and replace PASTE_YOUR_WEB_APP_URL_HERE with that URL.
6. Re-upload to Vercel. Test a submission: a new row appears (Timestamp, Role, Name, Email, Address).

If you edit the script later: Deploy > Manage deployments > edit > New version.
