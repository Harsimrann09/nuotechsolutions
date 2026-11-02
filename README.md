# Nuotech Solutions Pvt Ltd

Next.js App Router + React + TypeScript conversion of Nuotech_Solutions_final.html. The source HTML was not modified. Its styling, content, SVG artwork, product photos, and section order are preserved. Seventeen embedded images have been extracted into public/images. Interactive components handle navigation, themes, partner tabs and process stages.

## Local development

npm install
npm run dev

Open http://127.0.0.1:3000. Run npm run typecheck and npm run build to validate. Run npm start to serve a production build.

## MongoDB backend and enquiries

Set MONGODB_URI in .env (the existing MONDO_DB_URI spelling is also supported). MONGODB_DB overrides the database name; otherwise the database in the URI is used, falling back to nuotech when absent. Enquiries are saved in the enquiries collection with creation time, new status, and email notification status. Credentials remain server-side and .env is ignored by Git.

Optional email notifications require RESEND_API_KEY and a verified ENQUIRY_FROM sender. ENQUIRY_TO defaults to amandeep@nuotechsolutions.com. Without email credentials, enquiries still save successfully to MongoDB. Notification failures never discard a saved enquiry. Customer email is required; validation and a honeypot are included.

Run node --experimental-strip-types scripts/check-backend.mjs to ping the database. Append --seed to insert and read back two clearly labelled test enquiries. Append --api to test the running localhost enquiry endpoint and verify its saved record (this may send a notification if email credentials are configured). These flags write persistent test data; they never run during startup or builds.

## Hosting

Deploy to a hosting platform supporting Next.js server routes, and set the same email environment variables there. A static export cannot run this enquiry API. Connect your domain through your hosting provider. Existing external fonts and YouTube links require internet access. The decorative machine readouts are simulated.
