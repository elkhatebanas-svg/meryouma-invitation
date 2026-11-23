KHawlova / Anas — reproduction based on your two Eazo screenshots

FILES
- index.html: two-sided invitation matching the screenshots: textured cream background, thin blue-gray double frame, red heart inside an arch, serif heading, dotted perforation line, YES and runaway NO buttons, second card with date details and footer actions.
- Code.gs: Google Apps Script receiver. Stores YES or NO with timestamp and invitation details.
- README.txt: setup instructions.

RESPONSE RECEIVER SETUP
1. Create a blank Google Sheet at https://sheets.google.com.
2. Copy the ID from the URL: between /d/ and /edit.
3. Open https://script.google.com and create a project.
4. Paste Code.gs and replace PASTE_YOUR_GOOGLE_SHEET_ID_HERE with the Sheet ID.
5. Deploy > New deployment > Web app.
6. Execute as: Me. Who has access: Anyone.
7. Deploy, authorize, and copy the URL ending in /exec.
8. In index.html replace PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE with that URL.

PUBLISH FOR FREE
1. Create a public GitHub repository.
2. Upload index.html to the repository root.
3. Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Wait for the GitHub Pages URL and open it on a phone.
5. Test YES and verify a row appears in the private Google Sheet.

DEFAULT DETAILS
to=Khawlova
from=Anas
plan=Khrija zwina
when=Dimanche 29/11
where=Blassa Zwina

OPTIONAL URL PARAMETERS
?to=Khawlova&from=Anas&plan=Khrija+zwina&when=Dimanche+29%2F11&where=Blassa+Zwina

NO BUTTON BEHAVIOUR
The NO button moves away on pointer hover, touch, and keyboard focus. This deliberately makes it difficult to select, matching the Eazo interaction. If a click nevertheless reaches it (for example, through assistive input), the code records NO. Since the intended interaction is to escape, most attempts will not be a confirmed NO answer.

IMPORTANT
The public Apps Script endpoint is needed so the public invitation can submit a response. The script validates allowed response values and records only the invitation details; do not use it for sensitive information. Do not share the Google Sheet itself. The on-page confirmation is a UI acknowledgement; verify the saved row in Google Sheets.


THIRD PAGE — TIME SELECTION
The second card now has a button labelled "À quelle heure ?". It opens a third matching card with two choices: 11:00 and 17:00. Selecting a time submits YES and the chosen time together to Google Sheets.

UPDATE THE GOOGLE APPS SCRIPT
The Code.gs file now includes a Chosen time column. If you already deployed the previous version, open Apps Script > Deploy > Manage deployments > Edit (pencil) > Version: New version > Deploy. The web app URL normally remains the same.

UPDATE THE WEBSITE
Replace the old index.html in your GitHub repository with this updated one, and wait for GitHub Pages to redeploy.


UPDATED TIME OPTIONS
The third page now offers seven single-choice time buttons: 11h, 12h, 13h, 14h, 15h, 16h and 17h. The selected hour is stored as 11:00 through 17:00 in the Google Sheet. The Apps Script validation has been updated to accept all seven options.


FOURTH PAGE AND CONFIRMATION
The third page now requires the visitor to select one hour and press "Confirm the date". Only then does the form submit YES plus the selected hour to Google Sheets, and the fourth page appears with Anas's personal message. Selecting an hour alone does not send the response.

The fourth page text reads:
"I love you, Khawlova. I'll do my very best to make this date a beautiful moment for us. You deserve care, joy, and a day filled with lovely little things."

Update index.html on GitHub Pages. The Apps Script receiver already accepts all seven hours and stores the selected time; no script change is needed if the V3 Code.gs is already deployed. If not, deploy the current Code.gs as a new version.
