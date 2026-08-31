# MediCare Pro - Multi-stage Dockerfile
FROM node:18-alpine AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install --production
COPY backend/ ./
EXPOSE 5000
CMD ["node", "server.js"]

FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=backend /app/backend ./backend
COPY --from=frontend-build /app/frontend/dist ./frontend/dist
WORKDIR /app/backend
EXPOSE 5000
CMD ["node", "server.js"]
