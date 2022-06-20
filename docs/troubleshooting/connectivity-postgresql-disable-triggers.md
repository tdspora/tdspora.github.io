---
title: PostgreSQL - disable triggers
---

**PostgreSQL: error for ALTER TABLE DISABLE TRIGGERS ALL statement execusion by user without enough permission**

The case is:

User has transferred tables to the database of PostgreSQL with Subsetting integrity type. 
So, foreign keys are available on the target database.

Then the user selects the same tables, but transferring them with Migration integrity type and target filling mode as Truncate or Append.

During the pipeline execution, the back-end side runs the statement to disable the foreign keys: ALTER TABLE <table_name> DISABLE TRIGGERS ALL;.

In case the user selected for target connection does not have enough permission, the statement is not executed. And the foreign keys leave enabled.

The pipeline could be failed as far as database didn't allow to insert the values without reference:
```
ERROR: insert or update on table "<table_name>" violates foreign key constraint "<constraint_name>"
Detail: Key (<column_name>)=(<value_id>) is not present in table "<table_name>"
```

Solution:

1. User on target database has to have enough permission to execute the ALTER TABLE <table_name> DISABLE TRIGGERS ALL;

2. Disable the foreign keys on the target manually before the pipeline execution with Migration integrity type and enable the keys manually after the pipeline finished.

---
**Last updated:** January 03, 2022. 
**Applies to:** All users.

_Issue description and steps to reproduce goes here._

### Symptoms
1. User has transferred tables to the database of PostgreSQL with Subsetting integrity type. So, foreign keys are available on the target database.

2. Then the user selects the same tables, but transferring them with Migration integrity type and target filling mode as Truncate or Append.

3. During the pipeline execution, the back-end side runs the statement to disable the foreign keys: ALTER TABLE <table_name> DISABLE TRIGGERS ALL;.

4. In case the user selected for target connection does not have enough permission, the statement is not executed. And the foreign keys leave enabled.

5. The pipeline could be failed as far as database didn't allow to insert the values without reference:
```
ERROR: insert or update on table "<table_name>" violates foreign key constraint "<constraint_name>"
Detail: Key (<column_name>)=(<value_id>) is not present in table "<table_name>"
```

### Cause
PostgreSQL: error for ALTER TABLE DISABLE TRIGGERS ALL statement execusion by user without enough permission
  
### Solution
_Detailed solution goes here._

1. User on target database has to have enough permission to execute the `ALTER TABLE <table_name> DISABLE TRIGGERS ALL;` statements before starting a pipeline.

or

2. Disable the foreign keys on the target manually before the pipeline execution with Migration integrity type and enable the keys manually after the pipeline finished.

### Workaround
_Optional. Provide steps to workaround the issue._

### Related Article(s)
_Include the links and titles for any knowledge base articles related to this one._  
  
### Was This Article Helpful?
_Include a way for readers to let you know whether or not the content was helpful. This can be a yes/no or thumbs up/thumbs down feature, a 1-5 rating, or a link to provide feedback through email or a survey._  
  
### Still Need Help?
_Provide a way for customers to get in touch with you if they still have questions. This can be a link to your support page, a chat popup, or the email address for the best person to reach out to._  

---
**Knowledge Base Article** **Best Practices Checklist:**
-   Did you run this process by a customer or a fellow employee to see if he or she is able to follow along?
-   Do you use visual aids such as images, videos, and/or GIFs where appropriate?
-   Do you explain the process directly, clearly, and concisely, without unnecessary filler words?
-   Do you provide related articles for similar issues or topics?
-   Do you provide continued contact information for readers who still need help?
-   Did you set a reminder to revisit this article periodically to ensure that the content is accurate and up-to-date?

[Knowledge Base Articles for End-Users](https://kb.epam.com/display/EPMCTDM/Knowledge+Base+Articles+for+End-Users)