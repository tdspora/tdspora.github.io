---
title: Apache Spark Master URL
---

**Source**: [Master URLs](https://spark.apache.org/docs/latest/submitting-applications.html#master-urls).

The master URL passed to Spark can be in one of the following formats:

Master URL | Meaning
---------- | -------
local | Run Spark locally with one worker thread (i.e. no parallelism at all).
local[K] | Run Spark locally with K worker threads (ideally, set this to the number of cores on your machine).
local[K,F] | Run Spark locally with K worker threads and F maxFailures (see spark.task.maxFailures for an explanation of this variable)
local[*] | Run Spark locally with as many worker threads as logical cores on your machine.
local[*,F] | Run Spark locally with as many worker threads as logical cores on your machine and F maxFailures.
spark://HOST:PORT | Connect to the given Spark standalone cluster master. The port must be whichever one your master is configured to use, which is 7077 by default.
spark://HOST1:PORT1,HOST2:PORT2 | Connect to the given Spark standalone cluster with standby masters with Zookeeper. The list must have all the master hosts in the high availability cluster set up with Zookeeper. The port must be whichever each master is configured to use, which is 7077 by default.
mesos://HOST:PORT | Connect to the given Mesos cluster. The port must be whichever one your is configured to use, which is 5050 by default. Or, for a Mesos cluster using ZooKeeper, use mesos://zk://.... To submit with --deploy-mode cluster, the HOST:PORT should be configured to connect to the MesosClusterDispatcher.
yarn | Connect to a YARN cluster in client or cluster mode depending on the value of --deploy-mode. The cluster location will be found based on the HADOOP_CONF_DIR or YARN_CONF_DIR variable.
k8s://HOST:PORT | Connect to a Kubernetes cluster in cluster mode. Client mode is currently unsupported and will be supported in future releases. The HOST and PORT refer to the Kubernetes API Server. It connects using TLS by default. In order to force it to use an unsecured connection, you can use k8s://http://HOST:PORT.
