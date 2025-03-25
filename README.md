
# Welcome to your GeoPortfolio project

## Project info

**URL**: https://lovable.dev/projects/95e9cf08-35fe-403b-a71d-35c97264681f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/95e9cf08-35fe-403b-a71d-35c97264681f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## GitHub Pages Deployment

To deploy this project to GitHub Pages, follow these steps:

1. Push your code to a GitHub repository
2. Add a GitHub workflow file to automate deployment:

Create a file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: GITHUB_PAGES=true npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

3. In your local repository, run:

```sh
# Create the GitHub workflow directory
mkdir -p .github/workflows

# Add the workflow file (contents as shown above)
# Then commit and push:
git add .github
git commit -m "Add GitHub Pages workflow"
git push
```

4. Go to your repository Settings > Pages and set the source to "GitHub Actions"

5. Your site will be available at `https://<USERNAME>.github.io/<REPO_NAME>/`

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project elsewhere?

Simply open [Lovable](https://lovable.dev/projects/95e9cf08-35fe-403b-a71d-35c97264681f) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet) in Lovable. If you want to deploy your project under your own domain, we recommend using GitHub Pages with a custom domain or Netlify.
