---
title: Dynamic allocation of executors
---

In case of --conf spark.dynamicAllocation.enabled=true, we get the error on worker:
```
ERROR SparkContext: Error initializing SparkContext.
org.apache.spark.SparkException: Dynamic allocation of executors requires the external shuffle service.
You may enable this through spark.shuffle.service.enabled.
    at org.apache.spark.ExecutorAllocationManager.validateSettings(ExecutorAllocationManager.scala:214)
    at org.apache.spark.ExecutorAllocationManager.<init>(ExecutorAllocationManager.scala:135)
    at org.apache.spark.SparkContext.<init>(SparkContext.scala:626)
    at org.apache.spark.SparkContext$.getOrCreate(SparkContext.scala:2678)
    at org.apache.spark.sql.SparkSession$Builder.$anonfun$getOrCreate$2(SparkSession.scala:942)
    at scala.Option.getOrElse(Option.scala:189)
    at org.apache.spark.sql.SparkSession$Builder.getOrCreate(SparkSession.scala:936)
    at com.epam.tdm.engine.TdmEngineJobApp$.$anonfun$main$1(TdmEngineJobApp.scala:110)
    at scala.util.Using$.$anonfun$apply$1(Using.scala:115)
    at scala.util.Try$.apply(Try.scala:213)
    at scala.util.Using$.apply(Using.scala:115)
    at com.epam.tdm.engine.TdmEngineJobApp$.main(TdmEngineJobApp.scala:110)
    at com.epam.tdm.engine.TdmEngineJobApp.main(TdmEngineJobApp.scala)
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
    at java.lang.reflect.Method.invoke(Method.java:498)
    at org.apache.spark.deploy.worker.DriverWrapper$.main(DriverWrapper.scala:65)
    at org.apache.spark.deploy.worker.DriverWrapper.main(DriverWrapper.scala)
```
From: [https://community.cloudera.com/t5/Support-Questions/Spark-dynamic-allocation-dont-work/td-p/140227](https://community.cloudera.com/t5/Support-Questions/Spark-dynamic-allocation-dont-work/td-p/140227)

Documentation about Dynamic Execution says the following (**bold** mine):

There are **two** requirements for using this feature. **First**, your application must set `spark.dynamicAllocation.enabled` to `true`. **Second**, you must set up an _external shuffle service_ on each worker node in the same cluster and set `spark.shuffle.service.enabled` to true in your application. The purpose of the external shuffle service is to allow executors to be removed without deleting shuffle files written by them (more detail described [below](https://spark.apache.org/docs/latest/job-scheduling.html#graceful-decommission-of-executors)). The way to set up this service varies across cluster managers:

In standalone mode, simply start your workers with `spark.shuffle.service.enabled` set to `true`.

In Mesos coarse-grained mode, run `$SPARK_HOME/sbin/start-mesos-shuffle-service.sh` on all slave nodes with `spark.shuffle.service.enabled` set to `true`. For instance, you may do so through Marathon.

In YARN mode, start the shuffle service on each `NodeManager` as follows:

1.  Build Spark with the [YARN profile](https://spark.apache.org/docs/latest/building-spark.html). Skip this step if you are using a pre-packaged distribution.
2.  Locate the `spark-<version>-yarn-shuffle.jar`. This should be under `$SPARK_HOME/network/yarn/target/scala-<version>` if you are building Spark yourself, and under `lib` if you are using a distribution.
3.  Add this jar to the classpath of all `NodeManager`s in your cluster.
4.  In the `yarn-site.xml` on each node, add `spark_shuffle` to `yarn.nodemanager.aux-services`, then set `yarn.nodemanager.aux-services.spark_shuffle.class` to `org.apache.spark.network.yarn.YarnShuffleService`.
5.  Restart all `NodeManager`s in your cluster.

All other relevant configurations are optional and under the `spark.dynamicAllocation.*` and `spark.shuffle.service.*` namespaces. For more detail, see the [configurations page](https://spark.apache.org/docs/latest/configuration.html#dynamic-allocation).

Reference Link:

[https://spark.apache.org/docs/latest/job-scheduling.html#dynamic-resource-allocation](https://spark.apache.org/docs/latest/job-scheduling.html#dynamic-resource-allocation)