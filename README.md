This is a [Next.js](https://nextjs.org) assignment project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up Environment Variables
   To connect the application to the backend API, you must configure your environment variables.

Locate the env.example file in the root directory.

Rename this file to .env.

Open the newly created .env file and populate the missing values for the following keys:

```bash
# The base URL for the backend API
API_HOST=your_api_host_url

# Your secure API authentication key
X_API_KEY=your_api_key
```

2. You can regenerate TS types from 'product-listing-app/src/types/columbus-recruitment.schema.json' (in case of future changes) with usage of:

```bash
npm run generate:types
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![Page with product list](https://github.com/artoor-b/product-listing-app/blob/main/docs/Screenshot%202026-05-05%20at%2000.11.08.png)
![Product list page with cart summary opened](https://github.com/artoor-b/product-listing-app/blob/main/docs/Screenshot%202026-05-05%20at%2000.11.30.png)
![Product list page with empty cart summary opened](https://github.com/artoor-b/product-listing-app/blob/main/docs/Screenshot%202026-05-05%20at%2000.11.44.png)
