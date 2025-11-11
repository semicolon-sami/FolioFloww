# How to Personalize Your FolioFlow Portfolio

Welcome to your new portfolio! This guide will walk you through all the places you need to edit to make this website your own.

Most of the content is centralized in a few key files to make editing easier.

---

## 1. Main Content and Data (`src/lib/data.ts`)

This is the most important file. It contains the data for your projects, skills, and social media links.

- **`NAV_LINKS`**: If you want to add, remove, or change navigation links in the header, you can do it here.
- **`SOCIALS`**: Update the `url` for each social media profile (GitHub, LinkedIn, Email).
- **`PROJECTS`**: This is an array of your projects. You should:
    - Replace the content of the existing four project objects with your own project details.
    - **`slug`**: A unique, URL-friendly identifier for your project.
    - **`title`**: Your project's name.
    - **`summary`**: A short, one-sentence description.
    - **`imagePlaceholderId`**: This links to an image in `src/lib/placeholder-images.json`. You can change the image there.
    - **`techStack`**: A list of technologies used.
    - **`liveDemoUrl`**, **`githubUrl`**: Links to the live version and the code repository.
    - **`problem`**, **`features`**, **`learnings`**: Detailed sections for your project page.
- **`SKILLS`**: This is a categorized list of your skills.
    - You can change the categories (`Frontend`, `Backend`, etc.).
    - You can edit, add, or remove skills within each category. The `icon` property uses icons from `src/components/icons.tsx`.

---

## 2. Page Content

### Homepage (`src/app/page.tsx`)

- **Headline and Bio**: Change the main heading and the paragraphs below it to reflect your personal brand and introduction. I have already updated the placeholder text to be more generic.

### About Page (`src/app/about/page.tsx`)

- Update the text content, including your `Education` and `Interests` sections. You can edit your university name and graduation year here.

### Contact Page (`src/app/contact/page.tsx`)

- This page pulls your social links from `src/lib/data.ts`. The contact form itself should work out of the box, but the messages are currently only logged to the server console.

---

## 3. General Information & SEO

### Main Layout (`src/app/layout.tsx`)

- In the `metadata` object, change `authors` and `creator` from `"Your Name"` to your actual name. This is important for search engines.

### Footer (`src/components/footer.tsx`)

- Change the copyright text from `"Your Name"` to your name in the footer.

---

## 4. Images and Resume

### Replacing Images (`src/lib/placeholder-images.json`)

This file is a central library for all the images used in the portfolio. To replace an image:

1.  Upload your new image to an image hosting service (like [Imgur](https://imgur.com/upload), [Cloudinary](https://cloudinary.com/), or even a public GitHub repository).
2.  Find the `id` of the image you want to replace in the JSON file (e.g., `hero-background` or `about-profile`).
3.  Replace the `imageUrl` with the URL of your newly uploaded image.
4.  Optionally, update the `description` and `imageHint` to match your new image.

**You do not need to rename any files.** Just update the URLs in this JSON file.

### Adding Your Resume (`/public/resume.pdf`)

1.  Create a PDF version of your resume and name it `resume.pdf`.
2.  Delete the existing placeholder `resume.pdf` inside the `/public` directory.
3.  Upload your new `resume.pdf` into the `/public` directory.

The "Download PDF" button on the Resume page will automatically link to this file.

---

That's it! By editing these files, you can completely customize the content of your portfolio.
