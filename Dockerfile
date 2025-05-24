FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Билдим приложение
RUN npm run build

# Определяем переменные окружения
ENV NODE_ENV=production

# Открываем порт
EXPOSE 1337

# Запускаем приложение
CMD ["npm", "start"] 