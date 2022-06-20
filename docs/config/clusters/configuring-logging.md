---
title: Configuring logging
---

See details in [Apache Spark documentation](https://spark.apache.org/docs/2.4.2/configuration.html#configuring-logging).

The table below could help you in selection of appropriate [log level](https://www.tutorialspoint.com/log4j/log4j_logging_levels.htm):

| Level | Description |
|-------|-------------|
| OFF | The highest possible rank and is intended to turn off logging.|
| FATAL | Designates very severe error events that will presumably lead the application to abort.|
| ERROR | Designates error events that might still allow the application to continue running. |
|WARN|Designates potentially harmful situations.|
|INFO|Designates informational messages that highlight the progress of the application at coarse-grained level.|
|DEBUG|Designates fine-grained informational events that are most useful to debug an application.|
|TRACE|Designates finer-grained informational events than the DEBUG.|
|ALL|All levels including custom levels.|
