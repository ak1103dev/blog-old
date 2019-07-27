---
title: "Building My Blog with Gatsby"
date: "2019-07-27"
---

![cover](https://miro.medium.com/max/1838/0*zLw3GxHCJCtuwCUf.jpg)

> Gatsby ไม่ใช่เยลใส่ผมนะครับ แต่มันคือ JavaScript Framework สำหรับทำ static website นะครับ

โดยในส่วนของการ render จะใช้ React.js และมีส่วนเก็บ data ของ website เป็น graphql

เราสามารถดูรายละเอียดเพิ่มเติมได้ที่ <https://www.gatsbyjs.org/>

## ทำไมผมถึงเลือก Gatsby มาสร้าง Blog

1. เพราะว่าผมเขียน React.js เป็นประจำอยู่แล้ว

2. เพราะว่า Gatsby ใช้สร้าง static website

3. เพราะว่า Gatsby มี plugin มากมาย

### มาดูถึงเหตุผล 2 ข้อแรกกันก่อน

React.js ที่ผมเล็งอยู่มีทั้งหมด 3 Frameworks ด้วยกัน นั่นคือ

- create-react-app
- Next.js
- Gatsby.js

โดย `create-react-app` จะใช้สร้าง project ง่ายๆ ทั่วไป ไม่เน่น SEO

ส่วน `Next.js` จะใช้สร้าง web app ที่ต้องการ SEO เพราะว่ามี feature server side rendering (ssr)

สุดท้าย `Gatsby.js` เหมาะจะทำ static website เช่่น web blog, wen content ที่ต้องการ SEO และไม่ได้มีความซับซ้อนมากนัก

### Gatsby plugin

Gatsby มี plugin อยู่มากมาย เราสามารถดูเพิ่มเติมได้ที่ <https://www.gatsbyjs.org/plugins/>

ส่วน plugin ที่ใช้สร้าง Blog นี้ก็มีมากมาย เข่น

- `gatsby-plugin-emotion` เป็น plugin ที่เชื่อมกับ emotion ซึ่งเป็น library เกี่ยวกับ css in js
- `gatsby-transformer-remark` เป็น plugin แปลง markdown เป็น html เพิ่อมาแสดงผลบน blog นี้
- `gatsby-plugin-typography` เป็น plugin จัดการเรื่องลักษณะต่างๆ ของตัวอักษรบนเว็บ

## How to build My Blog

ผมค่อยๆ สร้าง blog นี้ในยามว่างตาม tutorial นี้ <https://www.gatsbyjs.org/tutorial/>

ซึ่งมีด้วยกัน 8 ขั้นตอน ได้แก่

0. Set Up Your Development Environment
1. Get to know Gatsby building blocks
2. Introduction to using CSS in Gatsby
3. Building nested layouts in Gatsby
4. Querying for data in a blog
5. Source plugins and rendering queried data
6. Transformer plugins
7. Programmatically create pages from data
8. Preparing a site to go live

*** ระหว่างที่ผมเขียนบทความนี้อยู่ ผมได้ทำมาถึงขั้นตอนที่ 7 แล้ว

---

นอกจากทำตาม tutorial แล้ว จริงๆ ก็มี starter ที่ทำให้ขึ้นโครงได้ง่ายขึ้น เช่น

- [gatsby-starter-defautl](https://github.com/gatsbyjs/gatsby-starter-default)
- [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)
- [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)

> นี่เป็นบทความแรกของ blog นี้ ฝากเนื้อฝากตัวด้วยนะครับ
