# Chester Mikhail De Guzman — Data Analytics Portfolio

A responsive, dark corporate portfolio website designed for GitHub Pages.

## Included

- Responsive one-page portfolio
- About, skills, experience, projects, certificates, and contact sections
- Project filtering by Excel, Power BI, SQL, and Python
- Interactive project case-study dialogs
- Resume button
- Mobile navigation
- Accessible semantic HTML
- SEO and social-sharing metadata
- No build tools required

## Add your resume

1. Export your resume as a PDF.
2. Rename it to `Chester-Mikhail-De-Guzman-Resume.pdf`.
3. Place it inside the `assets` folder.

## Add project images later

Create an `assets/images` folder and add screenshots or dashboard images. You can then place an `<img>` element inside any `.project-card` in `index.html`.

## Publish using GitHub Pages

1. Create a new GitHub repository. A recommended name is `chesterdeguzman.github.io`.
2. Upload all files in this folder to the repository root.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root` folder, then save.
7. Your site will be available at `https://chesterdeguzman.github.io/` if you use the recommended repository name.

For a differently named repository, the URL will usually be:
`https://chesterdeguzman.github.io/repository-name/`

## Customize

- Update project repository links in `index.html` when your Python and SQL repositories are ready.
- Update project descriptions directly in `index.html`.
- Update detailed case-study content in `script.js`.
- Change theme colors in the `:root` section of `styles.css`.

## Local preview

Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
