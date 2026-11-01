# BeatUploader website

Standalone static website for Vercel. No build step or npm dependencies are required.

## Deploy on Vercel

1. Create a separate GitHub repository for this website.
2. Push the contents of this folder to that repository (the repository root should contain `index.html`).
3. In Vercel, import the website repository. Use the project root `/` and leave the build command and output directory blank; Vercel serves the static HTML files directly.
4. Add your production domain to the Google OAuth consent-screen configuration. Publish the privacy notice at `/privacy.html` and provide its public URL in the Google Auth Platform branding/verification setup.

## Installer download

The download buttons currently point to the BeatUploader GitHub Releases page. Publish a Windows installer as a release asset, then update `site-config.js` to its direct public download URL, for example:

```js
window.BeatUploaderSite = {
  downloadUrl: 'https://github.com/OWNER/REPOSITORY/releases/latest/download/BeatUploader-Setup.exe'
};
```

The repository currently has no release installer asset, so the website does not claim that an installer is already downloadable. Build and test a Release VST3/Standalone package and create the installer before advertising a live download.

Do not put OAuth client secrets, refresh tokens, or credential JSON files in this website repository. Keep app-specific values out of the public site unless they are intended for public display.
