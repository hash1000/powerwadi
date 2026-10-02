# Power Wadi Al Ram

Website for Power Wadi Al Ram Building Maintenance W.L.L.

## Development

Install dependencies and start the Next.js development server:

```bash
npm install
npm run dev
```

Run the production build and lint checks with `npm run build` and `npm run lint`.

## Contact form

The contact form uses Resend. Configure `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in the deployment environment. The sender address must be verified with Resend. Messages are sent to `contact@powerwadialram.com` with `info@powerwadialram.com` copied; no API credentials are stored in the repository.

## Photography

The optimized WebP images in `public/images/heroes/` are local derivatives of the Unsplash photographs already used by the earlier site design. Unsplash's license does not require attribution: https://unsplash.com/license. Replace them with company-owned photography when available.