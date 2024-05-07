# Usar a imagem base oficial do Nginx
FROM nginx:alpine

# Copiar os arquivos da aplicação para o diretório de hospedagem do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80 para acesso ao servidor Nginx
EXPOSE 80

# O Nginx inicia automaticamente quando o contêiner é lançado, então não é necessário um CMD
