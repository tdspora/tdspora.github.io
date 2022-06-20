---
title: Target filling methods
---

**_Re-create mode_**

Drop existing tables in scope from the target database and create new ones before data transfer. 
Tables that are not present in the target database will be created anew.

-------------------------------------------------------------------------------------------------------------------

**_Truncate mode_**

All data of target tables already existing in target DB is deleted before data transfer and replaced with new data. 
Tables not yet existing are created.

-------------------------------------------------------------------------------------------------------------------

**_Append new mode_**

Transferred data is added to target data. 
Rows with existing PK are left untouched. 
Rows with new PK are inserted. 
Tables not yet existing are created.

**Note**: the records of the table without PRIMARY KEY constraint are added (appended) to the available ones,
so duplicates could be detected on the target table. 
To avoid the identical records, please use 'Truncate' target filling method instead of 'Append new'.

-------------------------------------------------------------------------------------------------------------------


**_Append and Update mode_**

Transferred data is added to target data. 
Rows with existing PK are updated. 
Rows with new PK are inserted. 
Tables not yet existing are created.

**Note1**: the tables without PRIMARY KEY constraint could not be transferred with 'Append and update' 
target filling method.

**Note2**: the tables with UNIQUE constraint could not be transferred with 'Append and update' target filling
methods.

-------------------------------------------------------------------------------------------------------------------

**Note**: in case of topology mismatch for 'Truncate', 'Append new' and 'Append and update' target filling 
methods no data transfer will be done.
