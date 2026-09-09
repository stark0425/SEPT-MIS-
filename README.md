# NEON MIS — Futuristic Shared Business Dashboard

This converts the Excel MIS concept into a futuristic responsive web dashboard.

## What it does
- Shared business ledger
- Employee-wise leaderboard
- Gross business / Net business / average ticket / top performer
- Daily business pulse
- Search and status filters
- Add Business form
- Automatic credit factor:
  - CAT A = 40%
  - CAT B = 75%
  - CAT B = 90%
  - ALL = 100%
- Net calculation = calculated credit / 1.18
- Works on desktop and mobile
- Existing September 2026 Excel rows are included as demo seed data

## Important: GitHub Pages alone is NOT enough for shared editing
If every employee should add business and everyone should see the same live data, use:
GitHub Pages (frontend) + Supabase (database).

### 1. Create Supabase database
Create a Supabase project and run `supabase.sql` in SQL Editor.

### 2. Add Supabase keys
Open `config.js` and set:
window.SUPABASE_URL = "YOUR_PROJECT_URL";
window.SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

Use the public anon key only. Never put a service_role key in the website.

### 3. Upload to GitHub
Create a repository, upload:
- index.html
- style.css
- app.js
- config.js
- supabase.sql

Then GitHub → Settings → Pages → Deploy from branch → main → root.

### 4. Share the GitHub Pages URL
All employees can open the same URL. New business entries will be stored in Supabase and appear for everyone after refresh.

## Security note
The included SQL intentionally allows public read/insert so this can work without login. For a real company MIS, the recommended next version is:
- employee login
- admin login
- employee can edit only their own rows
- admin can edit/delete everything
- audit log
- monthly targets
- export to Excel/PDF
- backup and role-based permissions

## Excel formulas preserved
The current workbook's mapping is represented by the four credit factors above, and net is calculated by dividing the calculated credit by 1.18.


### Employee master list
The dashboard always shows these 8 employees, including employees with zero business: HIMANSHU, RAJAN, ROHIT, AKASH, KAIF, NIKHIL, KAVYANSH, PRINCE.
