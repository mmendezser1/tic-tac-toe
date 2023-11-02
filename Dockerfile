# Establece la imagen base como nginx
FROM nginx:alpine

# Elimina la configuración de nginx existente
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos estáticos generados por Vite en la ubicación de nginx
COPY dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar nginx una vez que el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]
