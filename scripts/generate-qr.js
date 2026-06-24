// QR Code Generator for Folklor Kawah Putih
// Usage: node scripts/generate-qr.js <vercel-url>

const https = require("https");
const fs = require("fs");
const path = require("path");

const url = process.argv[2];

if (!url) {
  console.log("Usage: node scripts/generate-qr.js <vercel-url>");
  console.log("Example: node scripts/generate-qr.js https://folklor-kawah-putih.vercel.app");
  process.exit(1);
}

// Using QR Server API (free, no auth required)
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;

const filePath = path.join(__dirname, "..", "public", "qr-code.png");

https.get(qrUrl, (response) => {
  if (response.statusCode === 200) {
    const file = fs.createWriteStream(filePath);
    response.pipe(file);
    file.on("finish", () => {
      file.close();
      console.log(`QR Code generated: ${filePath}`);
      console.log(`URL: ${url}`);
    });
  } else {
    console.error("Failed to generate QR code");
    process.exit(1);
  }
});
