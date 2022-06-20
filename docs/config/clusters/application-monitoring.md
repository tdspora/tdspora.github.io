---
title: Apache Spark Master and History Web UI
---

Apache Spark has powerful monitoring tools including built in Web UIs for the Master and History servers. TDspora allows quick access to the tools using URLs in the **Spark master web UI URL** and **Spark history server web UI URL** fields of the Cluster configuration page.

Once you execute a pipeline and it is in progress, the link to the Spark Master server will be available on the pipeline **Execution activity** page. Completed pipelines will be accompanied with a link to the History Server UI.

**In Progress**

![Pipeline In Progress](/img/execution-activity-in-progress.png)

**Done**

![Pipeline Done or Failed](/img/execution-activity-done.png)

For more details check [Monitoring and Instrumentation](https://spark.apache.org/docs/2.0.0-preview/monitoring.html).
