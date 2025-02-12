# Bionic Reader
Working on a bionic reader to help me friend read faster 

## Folder Structure

```
bionic-reading-app/
├── public/                  # Static assets (e.g., favicon, images)
├── src/
│   ├── app/                 # App Router directory
│   │   ├── (main)/          # Optional route group (e.g., for main layout)
│   │   │   ├── layout.jsx   # Root layout for the app
│   │   │   ├── page.jsx     # Home page (default route)
│   │   │   └── globals.css  # Global styles
│   │   ├── about/           # Example: About page
│   │   │   └── page.jsx
│   │   └── api/             # API routes (optional)
│   │       └── bionic/      # Example: API route for bionic conversion
│   │           └── route.js
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Generic components (e.g., Button, Input)
│   │   ├── BionicText/      # Component for displaying bionic text
│   │   └── Header/          # Header component
│   │   └── Footer/          # Footer component
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Modular styles (CSS modules)
│   │   ├── variables.css    # CSS variables (e.g., colors, fonts)
│   │   └── BionicText.module.css
│   ├── utils/               # Utility functions (e.g., bionic text converter)
│   └── lib/                 # Library functions (e.g., API clients)
├── .env                     # Environment variables
├── .gitignore               # Files/folders to ignore in Git
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```
