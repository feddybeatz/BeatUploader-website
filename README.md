# BeatUploader website

Live site: <https://beatuploader-ten.vercel.app/>

This folder is the standalone static website repository for Vercel. It has no build step or npm dependencies. Vercel is connected to this GitHub repository, so pushing website changes to `main` triggers deployment automatically; there is no need to run a separate Vercel deploy command.

## Download button

The site's download buttons point directly to the latest BeatUploader Windows installer release asset:

<https://github.com/feddybeatz/BeatUploaderVST/releases/latest/download/BeatUploader-Setup.exe>

For that download to work, publish a GitHub Release in `feddybeatz/BeatUploaderVST` and attach the installer with the exact filename `BeatUploader-Setup.exe`. The VST repository currently has no published release, so the direct download will return unavailable until that release asset exists.

## Google OAuth

The public privacy notice is at <https://beatuploader-ten.vercel.app/privacy.html>. Configure that URL and your verified production domain in Google Auth Platform as part of the OAuth app's production verification. Never put OAuth client secrets, refresh tokens, or credential JSON files in this public website repository.
