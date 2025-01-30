# Next.js 15 `getServerSideProps` Error Handling Bug

This repository demonstrates a subtle bug in Next.js 15 related to error handling within `getServerSideProps` when fetching data for dynamic routes.  The problem is that if data fetching fails, instead of a clear error message, Next.js may present a blank page, making debugging difficult.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to a dynamic route (e.g., `/dynamic/1`).  If the API call in `getServerSideProps` fails (simulated in the code), you'll see a blank page instead of a proper error.

## Solution

The `pages/dynamic/[id].solution.js` file shows a solution incorporating explicit error handling within `getServerSideProps` to provide a user-friendly error message, improving the user experience and easing debugging.

This improved error handling ensures that instead of an unhandled error resulting in a blank page, a clear and informative error page is rendered.