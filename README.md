# assignment
# Assignment 2

## Due Date: 11:59pm 14 October, 2020 AEST

Before starting the assignments please read the University policy on assignment and submission
requirements and student responsibilities.

## Introduction

The Australian Census questionnaire asks questions about each Australian household and the
individuals residing in the household on a specific night of the year.

The Australian Bureau of Statistics (ABS) is wanting to shift the Australian Census
questionnaire completely on line — discarding all paper copies. To test if it is feasible and
whether it is preferred to paper forms the ABS would like a small example Census form. You are
to design and implement the example census form.

The questionnaire is in three parts:

```
o the first part of a census form consists of questions for each person spending the census
night in the dwelling
```
```
o the second part of a census form consists of questions for each person spending the
night
```
```
o The additional third part is to get feedback on the experience of filling out the census
form online.
```
Example Questions

```
o Address of the Dwelling: Apartment Number, Street Number, Street, Suburb/City,
State, Postcode
```
```
o Part I: People in the Dwelling
```
```
o How many people spent the census night at the dwelling?
```
```
o For each individual:
```
```
o Given Name
```
```
o Family Name
```
```
o Gender
```
```
o Date of Birth
o Country of Birth: Australia, New Zealand, Fiji, Solomon Islands, Papua New Guinea,
Philippines, ...
```

```
o In what year did you arrive in Australia?
```
```
o Are you an Australian Citizen?
```
```
o Do you speak a Language other than English? English Only, Mandarin, Italian, Arabic,
Cantonese, Greek, ...
```
```
o How well do you speak English: Very Well, Well, Not Well, Not at All
```
```
o What is the highest year of secondary school the person has completed? Year 7, Year 8, ...
Year 12, Did not go to high school
```
```
o What is the highest qualification you have received? Trade Certificate, Cert. I, Cert. II,
Cert. III, Cert. IV, Bachelor Degree, Associate Diploma, Diploma, Masters, PhD. ...
```
```
o What is the main field of study of your Highest Qualification?
```
o Part II: The Dwelling

```
o Type of Dwelling: Detached House, Semi-detached House, Apartment, Retirement
village, Caravan, Houseboat, Boat, Tent, ...
```
```
o Is this dwelling: Owned outright, Owned with Mortgage, Rented, Rent-free, ...
```
```
o Sources of energy for the dwelling: Mains electricity, Photovoltaic Panels, Battery,
Gas, No power source, ...
```
```
o Internet Access for the dwelling: fibre to the house, fibre to the curb, fibre to the node,
fixed wireless, ADSL, Mobile Broadband, No Internet
```
```
o Average monthly internet download (in GB)?
```
```
o How Many Bedrooms in the dwelling?
```
```
o Are there any electric vehicles garaged at the dwelling?
```
```
If yes: What type: car, hybrid-car, SUV, hybrid-SUV, truck, hybrid-truck, scooter,
motorcycle
```
o Part III: Rating the Example Questionnaire

```
o For possible follow-up questions please supply a contact — phone-number or email
address
```
```
o How difficult was this questionnaire to navigate? Very Hard, Hard, OK, Easy, Very
Easy
```
```
o Where the input requirements of each question easy to follow? Very confusing,
Confusing, OK, Clear, Very Clear
```
```
o Did you need to use the Help? Very Often, Often, Occasionally, Never
```

```
o Did you find the help useful? Yes, No, Did not use it
```
```
o Any other comments you would like to make?
```
You can change these, and even simplify them a bit, so long as you do not remove any of the
technical challenges. See the sample copy of the 2016 Household Census Form for ideas for
more questions.

Design an example census questionnaire for the ABS and implement it as a dynamic HTML
form. Your design should use the basic design style of the ABS census forms —

```
o The ABS logo, and
```
```
o the basic colour scheme of:
```
```
o Text Colour: #231f
```
```
o Question Background Colour: #fac08e
```
```
o Background Colour: #fcd6b
```
```
(See the sample copy of the 2016 Household Census Form for colours
```
Apart from these simple design requirements the design of the form is completely up to you
(within the technical restrictions listed below)

# Assignment Tasks

## o The census questionnaire must consist of one (1) form only.

```
o The entire assignment should consist one (1) HTML/XHTML page, plus the linked
JavaScript, CSS, Image, Font, etc files.
```
```
o The census questionnaire must not be displayed fully, but be broken into a minimum of
three sections, only one section at a time being displayed. Each person's section should
be displayed as a separate page.
```
```
o JavaScript is to be used to progressively display parts of the form as the user fills out
the questionnaire.
```
```
o Progress through the sections of the form must be displayed to the user.
```
```
o Parts of the form must be dynamic depending on the answer from the user. For
example, the page of questions for each person, the correct number of these pages must
be dynamically inserted based on the number of people in the dwelling. (Not just a
large number uncovered, but the correct number dynamically inserted into the DOM).
```
## The HTML5 template element can be used.


o Questions that have a Yes/No response, where depending on the response, there may
be follow-up questions (See electric vehicle question above) these questions can be
uncovered rather than inserted into the DOM (as the number of questions is already
known)

o Each section must be validated before progressing to the next section. This will require
JavaScript to validate the form, not HTML5. (Note: Ideally each input element should
be validated as the user progresses to the next element but that would require far more
coding than validating each section—too much work for this assignment.)

o If a question in the section does not validate, that question must be flagged for the user
to correct before proceeding.

## The JavaScript alert() function is not to be used to convey any information to the

```
user. All feedback must be an integral part of the page and be dynamically displayed as
required.
```
o The questionnaire must be usable on small and large viewports. The input elements
must be usable on mobile devices.

o Each section should have a help option that pops up help information for that section
— information to guide the user in filling out the form. The popup must be an element
on the page that is toggled

## between display:none; and display:block; The help information must

```
be properly formatted HTML/XHTML and styled — not just text.
```
o The minimum input element types to be used in the form

## are: text, tel, email, checkbox, radio, date, button, submit. Also

## the elements select, textarea, and datalist. This is the minimum list,

```
others should also be used for good design.
```
o The DOM must be manipulated directly using either, JavaScript, jQuery, or a

## combination of both. If jQuery is used it must be jquery-3.5.1.min.js which

```
can be downloaded from the course Web site. No other jQuery extension library or
framework is to be used.
```
## o The form method attribute should be set to POST and the action attribute

## to https://tau.usq.edu.au/courses/CSC2406/reflect.php.

```
For example:
```
## <form method="POST"

```
action="https://tau.usq.edu.au/courses/CSC2406/reflec
```
## t.php>

## When the form's submit button is pressed the sent data will be reflected back in a

```
well formatted XHTML page. This can be used to check the sent data.
```

```
o All HTML, CSS, JavaScript must be your own work. Images may be downloaded from
the Internet as long as suitable attribution is incorporated unobtrusively into the page
(see Assignment 1).
```
```
o The page must be properly formatted using CSS so that it looks like a page that
belongs to a valid site. Feel free to re-use ideas and code from Assignment 1.
```
```
o You're expected to treat HTML, CSS, and JavaScript as you would for any
programming language. As such, pay attention to your coding style, e.g., your code
should:
```
```
o Be simple and elegant,
```
```
o Be documented, e.g., comments at top of each document and on major sections,
```
```
o Use meaningful names (class names, variable and function names.)
```
```
o Have an appropriate code layout, e.g., consistent indentation and use of white space in
all source files,
```
```
o Strive for modularity, for reuse and visibility.
```
```
Marking Scheme
```
```
Working HTML5/XHTML5 & CSS, use of required input elements. 15
```
```
Data validation and error display. 20
```
```
Dynamic section of questionnaire, paging and progress reporting 20
```
```
Help sections that use (X)HTML5 and CSS3 and display correctly. 20
```
```
Overall design, question grouping and wording, and usability on mobile and desktop
devices.
```
### 15

```
HTML/CSS/JavaScript structured with comments. 10
```
### TOTAL 100

```
Assignment Submission
```
Assignment submission is only via the course assignment submission link on the USQ StudyDesk.
Acceptable file types are Unix Compressed Tar File (gzip, bzip2, or lzma), Windows’ Zip Archive
File, RAR Compressed Archive File, 7Zip Compressed Archive File.

If you have problems please contact the examiner as soon as possible.


