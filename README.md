# React Portfolio


## Summary of Task

This week my task was to build a portfolio using React, and deploy it Netlify. 


Below are the following Challenge requirements according to the 
**User Story** & **Acceptance Criteria**


## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Getting Started

I used `vite` to build my portfolio, which includes the following:

* A single `Header` component that appears on multiple pages

* A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of my portfolio

* A single `Project` component that will be used multiple times in the Portfolio section

* A single `Footer` component that appears on multiple pages

**Note**: Because this application doesn’t include a back end or connect to an API, the contact form doesn't save this information right now. 

### Steps to scaffold a new `vite` application

1. In the command line, in the parent folder, run `npm create vite`.

2. Enter the desired name of new project folder.

3. From the first list of options, select `React` framework.

4. From the second list of options, select `JavaScript` variant.

5. `cd` into project folder and run `npm install`.

6. Run `npm dev`/`npm run dev` and navigate to the prompted URL to see app.

### Further customization (Recommended)

1.  Modified `package.json` and `scripts` object to:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

2. Edited `vite.config.js` file and the export object to:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```


## Project View
The following shows the web application's appearance and functionality:

![React Portfolio 1](<assets/images/React Portfolio 1.jpg>)
![React Portfolio 1](<assets/images/React Portfolio 2.jpg>)

## Contact Information
Thanks for visiting!

If you would like to learn more, or contact me, feel free to reach me at the following:

<ul>
    <li>Deployed URL: https://react-portfolio-m-andrade.netlify.app </li>
    <li>GitHub URL: https://github.com/mandrade09/React-Portfolio </li>
    <li>E-mail: mattandrade09@gmail.com </li>
    <li>Phone: 310.903.9150</li>
</ul>

<p>
<footer> &ndash; Matthew Andrade</footer>
</p>