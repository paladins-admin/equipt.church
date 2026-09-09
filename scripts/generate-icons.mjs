import fs from 'node:fs/promises';
import sharp from 'sharp';
const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="120" fill="#4C9AFF"/><text x="256" y="362" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="430" font-weight="700" fill="#142d4d">e</text></svg>';
await fs.writeFile('public/favicon.svg', svg);
for (const [size, name] of [
  [180, 'apple-touch-icon.png'],
  [192, 'icon-192.png'],
  [512, 'icon-512.png'],
])
  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile('public/' + name);
const png = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 32;
header[7] = 32;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
await fs.writeFile('public/favicon.ico', Buffer.concat([header, png]));
console.log('Generated favicon, Apple touch icon, and manifest icons.');
