# BeatUploader website

Live site: <https://beatuploader-ten.vercel.app/>

This folder is the standalone static website repository for Vercel. It has no build step or npm dependencies. Vercel is connected to this GitHub repository, so pushing website changes to `main` triggers deployment automatically; there is no need to run a separate Vercel deploy command.

## Download button

The installer is stored in this repository at `downloads/BeatUploader-Installer.exe` and served directly by Vercel. The website buttons use `/downloads/BeatUploader-Installer.exe`; replacing that file and pushing the website repository to `main` updates the download when Vercel finishes deploying.

The standalone app and VST3 bundle are built from the VST repository and packaged with Inno Setup. Never commit OAuth client credentials or token files here.

## Google OAuth

The public privacy notice is at <https://beatuploader-ten.vercel.app/privacy.html>. Configure that URL and your verified production domain in Google Auth Platform as part of the OAuth app's production verification. Never put OAuth client secrets, refresh tokens, or credential JSON files in this public website repository.
