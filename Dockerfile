# Usa una imagen de Node como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios y el package.json a /app
COPY . /app/

# Instala las dependencias
RUN npm install

# Construye la aplicación
RUN npm run build

# Expone el puerto 80
EXPOSE 80

# Inicia la aplicación
CMD ["npm", "start"]
