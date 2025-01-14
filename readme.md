## Penjelasan Aplikasi

Proyek ini merupakan aplikasi web yang dikembangkan menggunakan Express JS, Handlebars, dan Sequelize ORM untuk mengelola operasi CRUD (Create, Read, Update, Delete). Aplikasi ini dibuat sebagai salah satu tugas dari Bootcamp Dumbways dan menggunakan PostgreSQL sebagai database. Selain itu, aplikasi ini juga memanfaatkan SweetAlert untuk memberikan notifikasi yang interaktif dan user-friendly.

## Fitur

- Create New Hero
- Update existing Hero
- Delete Hero
- Show all Hero
- Relation Type to hero

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ripaldiansyah/b59-finaltask-stage1-Ripaldiansyah.git

   ```
2. Navigate to the project folder:
   ```bash
   cd b59-finaltask-stage1-Ripaldiansyah

   ```
3. Open with vscode:
   ```bash
   code .
   ```
4. install dependency :
   ```bash
   npm install
   ```
5. sesuaikan username dan password database
   ```bash
   src/config/config.json
   ```
6. Run migration
   ```bash
   npx sequelize db:migrate
   ```
7. Run seeder
   ```bash
   npx sequelize-cli db:seed:all
   ```
8. start with NPM
   ```bash
   npm run dev
   ```
