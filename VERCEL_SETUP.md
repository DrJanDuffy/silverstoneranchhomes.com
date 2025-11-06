# Vercel Environment Variables Setup Guide

## Current Status

✅ **V0_API_KEY** - Configured (All Environments)

## 1. Verify V0_API_KEY is Working

After your deployment completes, you can verify your API key is working by:

1. **Visit your deployed site** and check if it loads without API key errors
2. **Test the validation endpoint**: Visit `https://your-domain.vercel.app/api/validate`
   - If working: You'll see JSON with `valid: true` and your user info
   - If not working: You'll see an error message indicating the issue

## 2. Set Up Rate Limiting (Optional but Recommended)

Rate limiting prevents abuse by limiting users to **3 generations per 12 hours**.

### Steps to Enable Rate Limiting:

1. **Create an Upstash Redis Database**:
   - Go to [upstash.com](https://upstash.com)
   - Sign up or log in
   - Create a new Redis database (free tier available)
   - Choose a region close to your Vercel deployment

2. **Get Your Credentials**:
   - After creating the database, go to the "Details" tab
   - Copy the **REST API URL** (starts with `https://`)
   - Copy the **REST API Token** (long alphanumeric string)

3. **Add to Vercel Environment Variables**:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add the following variables for **All Environments**:
     - **Key**: `KV_REST_API_URL`
       - **Value**: Your Upstash REST API URL
     - **Key**: `KV_REST_API_TOKEN`
       - **Value**: Your Upstash REST API Token
   - Mark both as **Sensitive** (recommended)
   - Click "Save"

4. **Redeploy**:
   - After adding the environment variables, Vercel will prompt you to redeploy
   - Or manually trigger a new deployment from the Deployments tab

### Rate Limiting Details

- **Limit**: 3 requests per 12 hours per IP address
- **Scope**: Applies to all generation requests (both new and existing chats)
- **Behavior**: If rate limit is exceeded, users receive a 429 status code with reset time
- **Fallback**: If Upstash credentials are not provided, rate limiting is disabled (unlimited)

## Environment Variables Summary

| Variable | Required | Status | Description |
|----------|----------|--------|-------------|
| `V0_API_KEY` | ✅ Yes | ✅ Set | Your v0 Platform API key from [v0.dev/settings](https://v0.dev/settings) |
| `KV_REST_API_URL` | ⚠️ Optional | ❌ Not Set | Upstash Redis REST URL for rate limiting |
| `KV_REST_API_TOKEN` | ⚠️ Optional | ❌ Not Set | Upstash Redis REST token for rate limiting |

## Testing Your Setup

1. **Test API Key**: Visit `/api/validate` endpoint
2. **Test Rate Limiting**: Make 4 generation requests within 12 hours - the 4th should be rate limited
3. **Check Logs**: Monitor Vercel function logs for any errors

## Troubleshooting

- **API Key Errors**: Ensure `V0_API_KEY` is set for all environments (Production, Preview, Development)
- **Rate Limiting Not Working**: Check that both `KV_REST_API_URL` and `KV_REST_API_TOKEN` are set correctly
- **Build Errors**: Ensure all environment variables are set before deploying

