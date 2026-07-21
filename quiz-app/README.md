# MLDM Exam Quiz

An interactive Vue 3 + PrimeVue 4 quiz app built from the *MLDM Exams* question bank (`../MLDM Exams.md`). It contains 68 multiple-choice questions covering distance metrics, clustering, classification, association rules, regression, CRISP-DM, and more — each with a full explanation of why the correct answer is right and why the other options are wrong.

## Features

- ✅ Multiple-choice questions (single-answer and multi-select "select all that apply") with instant grading
- 🙈 Answers are hidden by default; reveal on selection, and hide again with one click
- 🌓 Light/dark theme toggle (persisted)
- 🔖 Mark/bookmark questions (e.g. ones you got wrong or want to revisit) — they show up in a dedicated **Marked** tab with the same functionality
- ⭐ Rate each question's importance from 1–5 stars
- 🔍 Search and filter by category, sort by rating or "unanswered first"
- 📊 Live stats bar (answered / correct / marked counts)
- 💾 Everything is saved to `localStorage`, so your progress survives a refresh
- ➗ Math formulas rendered with KaTeX

## Running the app

### Option 1 — double-click launcher (Linux)

Double-click **`run.sh`** (or **`MLDM Quiz.desktop`**) in this folder. If your file manager asks whether to run or display the script, choose **Run**.

The first run will install dependencies automatically (needs an internet connection once), then start the dev server and open the app in your default browser at `http://localhost:5173`.

> If double-clicking just opens the file in a text editor, your file manager may not be configured to execute scripts. Right-click `run.sh` → **Properties** → **Permissions** → enable "Allow executing file as program", or run it from a terminal instead:
>
> ```bash
> ./run.sh
> ```

### Option 2 — terminal

```bash
npm install   # first time only
npm run dev
```

Then open the URL Vite prints (it should also open automatically).

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [PrimeVue 4](https://primevue.org/) with a customized Aura theme + dark mode
- [Vite](https://vitejs.dev/) for dev/build tooling
- [KaTeX](https://katex.org/) for rendering LaTeX math in questions/answers

## Project structure

```
src/
  components/
    QuestionCard.vue    # a single question: options, reveal/hide, mark, rate
    QuestionList.vue     # search/filter/sort + list of QuestionCard
    MathText.vue          # renders text containing $...$ LaTeX math
  composables/
    useQuizState.js      # shared reactive state (answers, marks, ratings, theme) + localStorage persistence
    renderMath.js         # KaTeX + paragraph/list rendering helper
  data/
    questions.json        # the 68 question bank entries
  App.vue                  # header, stats, tabs (All / Marked)
  main.js                  # PrimeVue setup + theme preset
```
