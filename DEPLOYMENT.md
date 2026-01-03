# Deployment Guide

## Option 1: Manual Deployment via PowerShell Script

### Quick Start

Run the deployment script from PowerShell:

```powershell
.\deploy.ps1
```

When prompted, enter your SSH password: `Ss#1008111`

### What the script does:
1. ✓ Checks if `dist/` folder exists
2. ✓ Counts files to upload
3. ✓ Uploads all files via SCP to Hostinger
4. ✓ Shows success message with live URLs

### Prerequisites:
- `npm run build` must be run first (creates `dist/` folder)
- SSH client available (built-in on Windows 10+)
- Valid SSH credentials configured

---

## Option 2: Automatic Deployment via GitHub Actions

This is the **RECOMMENDED** approach as it deploys automatically on every `git push main`.

### Setup Instructions

#### Step 1: Generate SSH Key Pair

On your local machine, generate an SSH key (without passphrase):

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/emavory_deploy -N ""
```

This creates two files:
- `~/.ssh/emavory_deploy` (private key)
- `~/.ssh/emavory_deploy.pub` (public key)

#### Step 2: Add Public Key to Hostinger

1. Go to Hostinger → Advanced → **SSH Access**
2. Click **"Add SSH key"**
3. Open `~/.ssh/emavory_deploy.pub` and copy the entire content
4. Paste it into Hostinger's SSH key field
5. Save

#### Step 3: Add Private Key to GitHub Secrets

1. Open your GitHub repository: `github.com/mchrouh/emavory`
2. Go to **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"**
4. Create secret named: `SSH_PRIVATE_KEY`
5. Open `~/.ssh/emavory_deploy` and copy the entire content
6. Paste it into the secret value field
7. Click **"Add secret"**

#### Step 4: Test the Workflow

Make a small change and push to main:

```bash
git add .
git commit -m "Test GitHub Actions deployment"
git push origin main
```

Then go to your repository:
- **Actions tab** → See the deployment workflow running
- Wait for ✓ "Deploy to Hostinger" to complete
- Visit https://emavory.com to verify

---

## GitHub Secrets Configuration

You need **ONE** secret in your GitHub repository:

| Secret Name | Value |
|---|---|
| `SSH_PRIVATE_KEY` | Content of `~/.ssh/emavory_deploy` file |

### How to find your secrets:

1. GitHub Repo → Settings → Secrets and variables → Actions
2. You should see `SSH_PRIVATE_KEY` listed

---

## Troubleshooting

### "Permission denied" error in GitHub Actions

**Solution**: Make sure you added the PUBLIC key to Hostinger (not the private key!)

```bash
# Verify your public key is on Hostinger
ssh -p 65002 u118534042@185.201.10.97 cat ~/.ssh/authorized_keys
```

### SCP command times out

**Solution**: SSH key authentication might not be set up. Verify:
1. Public key is in Hostinger `~/.ssh/authorized_keys`
2. Private key is correctly added to GitHub Secrets

### Deploy script asks for password repeatedly

**Solution**: The SSH key setup isn't working. Fall back to password authentication:

```powershell
# Will prompt for password once
.\deploy.ps1
```

---

## File Structure

```
emavory-html/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── deploy.ps1                   # Manual deployment script
├── dist/                        # Built files (created by npm run build)
├── src/
├── package.json
└── vite.config.js
```

---

## Deployment Workflow Comparison

| Method | Trigger | Speed | Ease |
|---|---|---|---|
| **PowerShell Script** | Manual | ~10 sec | ⭐⭐ |
| **GitHub Actions** | Auto (push) | ~2 min | ⭐⭐⭐ |

**Recommendation**: Use GitHub Actions for continuous deployment!

---

## Quick Commands

```bash
# Manual build + deploy
npm run build
.\deploy.ps1

# Push to GitHub (auto-deploys via GitHub Actions)
git add .
git commit -m "Your message"
git push origin main

# Check GitHub Actions status
# Go to: github.com/mchrouh/emavory/actions
```

---

## Live URLs After Deployment

- Homepage: https://emavory.com
- Test Page 1: https://emavory.com/test1
- Test Page 2 (Sumifun): https://emavory.com/test2

