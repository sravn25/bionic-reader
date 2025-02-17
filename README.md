# Bionic Reader
Working on a bionic reader to help me friend read faster 

## Folder Structure

```
bionic-reading-app/
├── public/                  # Static assets (e.g., favicon, images)
├── app/                     # App Router directory
│   ├── layout.tsx           # Root layout for the app
│   ├── page.tsx             # Home page (default route)
│   ├── globals.css          # Global styles
│   └── pdf/                 # PDF functions page
├── components/              # Reusable UI components
│   ├── ui/                  # Generic components (e.g., Button, Input)
│   ├── BionicText/          # Component for displaying bionic text
│   ├── Header/              # Header component
│   ├── Footer/              # Footer component
│   └── PDF/                 # PDF Function components
├── context/                 # Custom React Context
│   └── BionicContext.tsx    # Context for Bionic related (e.g., Configs)
├── hooks/                   # Custom React hooks
├── utils/                   # Utility functions (e.g., bionic text converter)
├── lib/                     # Library functions (e.g., API clients)
├── .env                     # Environment variables
├── .gitignore               # Files/folders to ignore in Git
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```

## Task List
1. PDF Parser
2. PDF Formatter
3. PDF File Output 
