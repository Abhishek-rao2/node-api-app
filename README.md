# Node API App 🚀

A simple Node.js REST API deployed with Docker, GitHub Actions, and AWS EC2.

## 🔧 Tech Stack

- Node.js + Express
- Docker
- GitHub Actions (CI/CD)
- AWS EC2 (Ubuntu)
- Docker Hub

## 📁 Project Structure

├── Dockerfile
├── index.js
├── package.json
└── .github
└── workflows
└── deploy.yml


## 🚀 Deployment Workflow

✅ Automatically deploys on `git push` to `main` branch:
- Pulls Docker image from Docker Hub
- SSH into EC2 using GitHub Secrets
- Stops old container (if running)
- Runs new container on port `80:3000`

## 🐳 Docker Image

Available at:  
**https://hub.docker.com/r/abhidochub123/node-api-app**

Run locally:

```bash
docker run -p 3000:3000 abhidochub123/node-api-app

