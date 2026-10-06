# Step 1: Base image — halka Node.js version
FROM node:20-alpine

# Step 2: Container ke andar working folder
WORKDIR /app

# Step 3: Pehle sirf package.json copy karo (caching ke liye)
COPY package*.json ./

# Step 4: Dependencies install karo
RUN npm install --production

# Step 5: Baaki saara code copy karo
COPY . .

# Step 6: Batao container kis port par sunta hai
EXPOSE 3000

# Step 7: Container start hote hi ye command chale
CMD ["node", "index.js"]