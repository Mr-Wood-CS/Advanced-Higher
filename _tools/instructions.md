# Advanced Higher Computing Science – Rebuild the Existing Objects Learning Page

## 1. Your task

You are working on my existing MkDocs website for Advanced Higher Computing Science.

The project is located at:

`C:\Users\dwood\OneDrive\Documents\Github-Local\Advanced-Higher`

Your task is to **completely improve the educational content and presentation of the existing Objects page**.

The result must be a high-quality digital textbook chapter that teaches pupils about objects in Object-Oriented Programming (OOP).

This is not a worksheet, revision summary, examination practice page or collection of Markdown notes.

You are acting as:

- An experienced Scottish Advanced Higher Computing Science teacher.
- An educational textbook author.
- An instructional designer specialising in accessible learning.
- A front-end developer experienced with MkDocs.

**Your priority is educational quality, technical accuracy and visual clarity.**

---

## 2. Critical restriction – Edit the original file only

The Objects page already exists.

**You must locate and update the original Objects Markdown file in place.**

Before changing anything:

1. Inspect the existing project structure.
2. Locate the original Objects Markdown file.
3. Read `mkdocs.yml` to identify its navigation entry.
4. Inspect the existing stylesheets and theme.
5. Read the current Objects page.
6. Identify any existing components that can be reused.

### You must NOT:

- Create another Objects Markdown file.
- Rename or move the original file.
- Change its existing URL.
- Change the navigation entry.
- Create a new MkDocs project.
- Duplicate the website.
- Modify any of the other eight OOP chapters.
- Rewrite unrelated pages.
- Remove existing site functionality.
- Create a separate document or replacement resource.

You may update an existing stylesheet where necessary to improve diagram presentation.

Do not create additional files unless technically essential. If additional files are required, explain why before creating them.

**The original Objects page must remain in its original location.**

---

## 3. Educational requirements

The audience is Advanced Higher Computing Science pupils in Scotland.

However, explanations must be accessible to pupils with the reading and comprehension level of approximately a 13-year-old.

This means:

- Simple, clear language.
- Short, meaningful paragraphs.
- Technical terms explained when introduced.
- One new concept at a time.
- Familiar examples.
- Carefully explained diagrams.
- Gradual progression.
- No unnecessary complexity.

Do not make the content childish.

Do not remove important technical knowledge simply to make the page shorter.

The resource must support pupils who need additional processing time and those who prefer to learn independently.

**A pupil should be able to read the page without a teacher present and understand the concept.**

---

## 4. Official course and diagram standards

Use the official Advanced Higher Computing Science course specification to ensure technical accuracy.

Use the 2026 Advanced Higher Computing Science question paper as a reference for object and class diagram conventions:

https://www.sqa.org.uk/pastpapers/papers/papers/2026/NAH_Computing-Science_QP_2026.pdf

Inspect the relevant diagrams in the paper before creating your own.

Use the same general notation where appropriate.

Do not invent SQA diagram conventions.

If you cannot access the reference, tell me and use technically accurate standard diagrams without claiming they match the paper.

---

## 5. The textbook standard

The Objects page must read like a professionally written digital textbook chapter.

It must contain genuine teaching, not simply definitions and examples.

### Every explanation should:

1. Introduce an idea.
2. Explain what it means.
3. Explain why it matters.
4. Demonstrate it using a familiar example.
5. Use a diagram where appropriate.
6. Connect the diagram to the written explanation.
7. Develop the idea further when the pupil is ready.

Avoid short, superficial paragraphs that simply state a fact.

Do not rely on bullet points to do the teaching.

Do not create large sections of text without meaningful visual support.

Do not use headings that sound like developer instructions.

For example, **"Start with one library book copy"** is not an appropriate textbook heading.

Use natural headings such as **"Understanding objects using a library"**.

---

## 6. Required Objects chapter content

Develop the existing page using the following progression.

### Section 1 – What is an object?

The page must begin with a proper introduction immediately below the heading **Objects**.

Explain:

- What Object-Oriented Programming means.
- What an object represents within a program.
- Why programmers use objects.
- That objects contain properties and methods.
- That properties store information.
- That methods describe behaviour.
- That separate objects can have different property values.

Introduce these ideas gradually.

Use familiar examples such as game characters, cars and library books.

Do not immediately begin with the library example.

The introduction must be several meaningful paragraphs, not one sentence or a list of definitions.

### Section 2 – Understanding objects using a library

Introduce a library that needs to keep track of its books.

Explain why a computer program needs to represent each physical copy separately.

Begin with **one copy of The Hobbit**.

Explain that this copy can be represented by an object.

Introduce its information gradually:

- Title: The Hobbit
- Copy number: 101
- On loan: True

Explain what each value represents.

Do not introduce the second book yet.

### Section 3 – Understanding the object diagram

Display a properly rendered diagram representing the first book object.

The diagram should identify:

- The object reference.
- The class.
- The properties.
- The property values.

Use accurate terminology and explain each part clearly.

Avoid introducing detailed class implementation at this stage.

The purpose is to teach pupils how to interpret an object diagram.

### Section 4 – Two objects of the same class

Now introduce a second physical copy of The Hobbit.

Explain why the library needs another object.

Use these values:

**First copy**
- Object reference: `copy1`
- Class: `Book`
- Title: `"The Hobbit"`
- Copy number: `101`
- On loan: `True`

**Second copy**
- Object reference: `copy2`
- Class: `Book`
- Title: `"The Hobbit"`
- Copy number: `102`
- On loan: `False`

Display the two objects side by side.

Explain that:

- Both objects represent books.
- Both have the same properties.
- Both contain the same title.
- Their copy numbers are different.
- Their loan statuses are different.
- Each object stores its own property values.

Highlight the differences visually.

### Section 5 – Changing an object's state

Explain that an object's state is the current set of values stored in its properties.

Demonstrate the second book being borrowed.

Its `on_loan` property changes from `False` to `True`.

Use a before-and-after diagram to show this change.

Explain why the first book remains unaffected.

This is important: pupils must understand that changing one independent object does not automatically change another.

### Section 6 – Objects in Python

Connect the diagrams to a small Python example.

Show how an existing object reference can be used to access and change a property.

For example:

```python
print(copy2.on_loan)
copy2.on_loan = True
print(copy2.on_loan)
```

Clearly state that this example assumes the object has already been created.

Explain each line.

Do not introduce a complete class implementation here. That belongs in the Classes chapter.

Do not introduce f-strings or `format()`.

### Section 7 – Objects in other situations

Briefly demonstrate how the same idea applies to another situation.

For example, two characters in a computer game may have different health values.

Explain how this demonstrates the same underlying principle.

This should reinforce the learning without creating another lengthy worked example.

### Section 8 – Essential knowledge

Finish with a concise summary of the most important points.

Include a natural link to the next chapter, Properties.

Do not add examination-style questions, quizzes or workbook activities.

---

## 7. Diagram design – Non-negotiable

Previous attempts have produced ASCII diagrams inside grey code blocks.

**This must not happen again.**

Do not create diagrams using:

- Plus signs and hyphens.
- Vertical bar characters.
- Monospaced text arranged into boxes.
- Markdown code fences.
- Large grey code containers.

### Required diagram implementation

Use proper SVG or HTML/CSS diagrams.

Diagrams must:

- Have clean, thin borders.
- Use clearly separated compartments.
- Follow verified SQA-style conventions where appropriate.
- Display labels and values accurately.
- Use readable typography.
- Be appropriately sized.
- Avoid excessive empty space.
- Be responsive.
- Remain readable on mobile devices.
- Have accessible text descriptions.
- Use consistent styling.

Object diagrams must not stretch across the full page unnecessarily.

### Diagram progression

The diagrams must develop alongside the teaching.

**Diagram 1:** One object, clearly labelled.

**Diagram 2:** Two objects side by side, showing their different values.

**Diagram 3:** Before-and-after representation of a changed property.

Do not use a diagram simply to decorate the page.

Each diagram must help the pupil understand something that has just been explained.

---

## 8. Website presentation

Preserve the existing MkDocs theme and visual identity.

The current typography is generally acceptable.

Improve the page by:

- Using balanced spacing.
- Keeping paragraphs at comfortable reading lengths.
- Positioning diagrams close to their explanations.
- Avoiding large empty areas.
- Avoiding excessive callout boxes.
- Keeping diagrams visually separate from Python code.
- Maintaining consistent headings.
- Ensuring the page works on smaller screens.

The page should look like a modern digital textbook, not a collection of Markdown blocks.

Do not introduce unnecessary frameworks or JavaScript dependencies.

Reuse existing CSS wherever practical.

---

## 9. Cognitive-load requirements

Pupils must not be overwhelmed by the page.

Apply the following principles:

- Introduce one main idea at a time.
- Explain vocabulary before using it repeatedly.
- Use diagrams to reduce the amount of text needed.
- Keep examples focused.
- Avoid unnecessary repetition.
- Avoid teaching later OOP concepts too early.
- Explain how each new section connects to the previous one.

Do not confuse reducing cognitive load with reducing the amount of teaching.

**The content must be thorough but easy to follow.**

---

## 10. Technical requirements

Before making changes:

1. Confirm the original Objects file path.
2. Confirm the existing navigation entry.
3. Check the site's available Markdown extensions.
4. Inspect existing CSS.
5. Check how the website is built and previewed.

After making changes:

1. Build the MkDocs site.
2. Check for build errors.
3. Open the actual rendered Objects page.
4. Inspect the page at desktop width.
5. Inspect the page at mobile width.
6. Check that all diagrams display correctly.
7. Check that Python code is correctly formatted.
8. Check that the page remains accessible.
9. Confirm the original URL works.
10. Confirm the other eight OOP chapters remain unchanged.

If browser inspection is unavailable, report that limitation honestly.

Do not claim to have visually verified the page unless you actually have.

---

## 11. Scope control

This is extremely important.

**Only update the existing Objects page.**

Do not work on Properties, Methods, Classes, Sub-classes, Encapsulation, Inheritance, Instantiation or Polymorphism.

Do not reorganise the MkDocs project.

Do not change the navigation.

Do not create another version of the website.

Do not create a replacement Objects file.

Do not make unrelated improvements.

Do not change anything simply because you think it could be better.

If a necessary change falls outside the permitted scope, explain it and request approval first.

---

## 12. Quality assurance

Before declaring completion, evaluate the page against these questions:

1. Does it begin with a proper introduction to objects?
2. Would a pupil understand the explanation without teacher support?
3. Are technical terms introduced gradually?
4. Does the library example begin with one object?
5. Is the second object introduced only after the first has been explained?
6. Are the diagrams professionally rendered?
7. Are the diagrams consistent with the verified SQA reference?
8. Are the diagrams explained rather than simply displayed?
9. Is the difference between two objects clear?
10. Is changing an object's state clearly demonstrated?
11. Is the Python example understandable?
12. Is the writing detailed enough to teach the concept?
13. Is the page visually balanced?
14. Does it work on desktop and mobile?
15. Has the original file been updated rather than replaced?
16. Are the other eight chapters untouched?

If any of these checks fail, correct the problem before finishing.

---

## 13. Completion report

When finished, tell me:

- The exact original Markdown file updated.
- Any existing stylesheet modified.
- The diagrams implemented.
- Whether the MkDocs build passed.
- Whether the rendered page was visually inspected.
- Whether the original URL and navigation were preserved.
- Whether the other eight chapters remain unchanged.
- Any outstanding issues.

Do not produce a lengthy technical report unless something requires attention.

## Final instruction

**I want one excellent Objects chapter, not nine mediocre chapters.**

Take the time needed to produce a polished, accurate, accessible digital textbook resource.

Do not proceed to the next chapter until I have reviewed and approved the Objects page.