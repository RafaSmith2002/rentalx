#definindo uma imagem para o meu projeto
FROM node

#definindo um diretório de trabalho
WORKDIR /usr/app

#copiando arquivo package.json para o docker
COPY package.json ./

#baixar dependencias
RUN npm install

#copiando todo o restante do projeto exceto os da lista .dockerignore
COPY . .

#informando porta de trabalho do meu projeto
EXPOSE 3333

#executar comando yarn dev
CMD ["npm", "run", "dev"]