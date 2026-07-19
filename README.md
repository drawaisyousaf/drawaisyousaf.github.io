# Dr. Awais Yousaf Personal Website

Official website for Dr. Awais Yousaf.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/awais.git
cd AWAIS
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` folder.

## 🌐 Deploying to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** named `awais` (or any name you prefer)

2. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/awais.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment"
   - Set **Source** to "GitHub Actions"

4. **Update the basePath in `next.config.js`:**
   - If your repo is named `AWAIS`, the basePath is already set correctly
   - If you use a different name, update both `basePath` and `assetPrefix` in `next.config.js`

5. **Push to trigger deployment:**
```bash
git push
```

The GitHub Action will automatically build and deploy your site. It will be available at:
`https://YOUR-USERNAME.github.io/awais/`

### Updating Content

To update the website:
1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push:
```bash
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and redeploy!

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── education/          # Education page
│   │   ├── experience/         # Experience page
│   │   ├── publications/       # Publications page
│   │   ├── past-students/      # Students page
│   │   ├── prof-activities/    # Professional Activities page
|   |   ├── more/               # More page
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navigation.tsx      # Navigation bar
│       └── Footer.tsx          # Footer component
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the primary color scheme.

### Content
- **Home page:** `src/app/page.tsx`
- **Education:** `src/app/education/page.tsx`
- **Experience:** `src/app/experience/page.tsx`
- **Publications:** `src/app/publications/page.tsx`
- **Students:** `src/app/past-students/page.tsx`
- **Professional Activities:** `src/app/prof-activities/page.tsx`
- **More:** `src/app/more/page.tsx` 


### Navigation
Edit the navigation items in `src/components/Navigation.tsx`.

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** GitHub Pages (via GitHub Actions)

## 📝 License

This project is for the Dr. Awais Yousaf personal website.

## 📧 Contact

For inquiries about the website, please contact Dr. Awais Yousaf:
- Awais Yousaf, SUTD, Singapore
