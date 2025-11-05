# Base
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar el resto del proyecto
COPY . .

# Construir la app
RUN npm run build

# Instalar servidor estático
RUN npm install -g serve

# Puerto
EXPOSE 3000

# Comando para servir la app
CMD ["serve", "-s", "build", "-l", "3000"]
