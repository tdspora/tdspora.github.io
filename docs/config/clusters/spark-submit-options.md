---
title: Apache Spark Cluster Configuration Options
---

The TDspora application is supplied with a pre-configured Apache Spark cluster running within Docker containers. This cluster is referenced as the "Local cluster" and configured to work in the `standalone` mode. It has two workers.

Please note that the Local cluster is intended for testing and demonstration purposes only. It is not recommended to use the cluster to process a large amount of data or execute more than one Spark application simultaneously. 
You can change its default configuration by using the **Spark-submit options** field in the **Advanced section**. 
Please ensure that the TDspora server has enough resources to allow the Local cluster to process Spark applications without significant degradation in performance of the server itself.

The production scale jobs require distributed Spark cluster configured to handle workloads corresponding to the data volumes extracted from the production databases. For example, the subsetting of 20GB of data from an Oracle database requires roughly 6GB RAM on a worker node. 
You also can use the **Spark-submit options** field in the **Advanced** section to manage the cluster resources (CPU cores and memory) for running your pipelines.

See [Apache Spark configuration](https://spark.apache.org/docs/latest/configuration.html#dynamically-loading-spark-properties) and [Dynamic Resource Allocation](https://spark.apache.org/docs/latest/job-scheduling.html#graceful-decommission-of-executors) for additional information about Spark configuration and available Spark properties.


## Deploment Mode
The `cluster` deploy mode set by default for the Apache Spark cluster supplied with the product. You can change the mode by providing option `--deploy-mode` in the advanced parameters of the cluster configuration. Currently, Spark supports two modes `client` and `cluster`.

Note, that if you set Master URL as `local` (or any variation of `local`, see [Apache Spark Master URL](spark-master-url.md)), the deploy mode will be automatically set to `client` as with this Master URLs the `cluster` deploy mode is not supported. 

## Spark-submit options

The options you define in this control passed directly to the spark-submit command that executes pipeline job on a Spark cluster except the following
- `--class` - points to the application engine implementation class `com.epam.tdm.engine.TdmEngineJobApp`
- `--files` - includes files required to execute the job (pipeline)
- `--master` - the master URL specified in a separate input control

Please refer to the [Apache Spark documentation](https://spark.apache.org/docs/latest/configuration.html#application-properties) for additional options available for the driver and executors.

## Running a Pipeline on a Remote Cluster
When you execute a pipeline, the application connects to the corresponding Apache Spark cluster using SSH and runs the spark-submit command. You can adjust the location and parameters of the command in the **Advanced** cluster configuration section:
![Advanced Cluster Configuration Options](/img/advanced-cluster-config.png)

### SSH Session and Environment Variables
Under the hood, the application connects to the cluster host in the non-interactive mode. It applied limitations to the availability of the user-defined environment variables.

We recommend modifying the `PATH` variable in the `/etc/environment` file to include Apache Spark `bin` and `sbin` folders, for example `PATH=...:/opt/spark/bin:/opt/spark/sbin`. Also, add the `SPARK_HOME` variable there. For instance, append line `SPARK_HOME=/opt/spark` to the file.

In case you have no privileges to modify the `/etc/environment` file, you can define the location of the Apache Spark home in the **Advanced** section.

- [Why does an SSH remote command get fewer environment variables then when run manually?](https://stackoverflow.com/questions/216202/why-does-an-ssh-remote-command-get-fewer-environment-variables-then-when-run-man)
- [The remote shell environment doesn’t match interactive shells!](http://www.fabfile.org/faq.html#the-remote-shell-environment-doesn-t-match-interactive-shells)

### Spark Home

The `SPARK_HOME` environment variable controls the location of the Apache Spark scripts executed even if you use the full path to the script or overrides it in the Cluster configuration. Pre-defined `SPARK_HOME` takes precedence over any other means of Apache Spark home selection.

If you have several versions of Spark on the remote machine make sure that the `SPARK_HOME` variable point to the valid version of Apache Spark.

Check [Cluster connection environment variables](cluster-connection-envs.md) for details.

---
For more details please check original [Apache Spark](https://spark.apache.org/) documentation: [Submitting Applications](https://spark.apache.org/docs/latest/submitting-applications.html).
