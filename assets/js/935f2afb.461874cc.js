"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[696],{5988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"label":"Get started","type":"category","items":[{"type":"link","label":"Get started","href":"/docs/introduction/get-started","docId":"introduction/get-started"}],"collapsed":true,"collapsible":true},{"label":"Configuration","type":"category","items":[{"type":"category","label":"Clusters","items":[{"type":"link","label":"Cluster connection environment variables","href":"/docs/config/clusters/cluster-connection-envs","docId":"config/clusters/cluster-connection-envs"},{"type":"link","label":"Configuring logging","href":"/docs/config/clusters/configuring-logging","docId":"config/clusters/configuring-logging"},{"type":"link","label":"Apache Spark Master URL","href":"/docs/config/clusters/spark-master-url","docId":"config/clusters/spark-master-url"},{"type":"link","label":"Apache Spark Cluster Configuration Options","href":"/docs/config/clusters/spark-submit-options","docId":"config/clusters/spark-submit-options"},{"type":"link","label":"SSH configuration","href":"/docs/config/clusters/ssh-configuration","docId":"config/clusters/ssh-configuration"},{"type":"link","label":"Apache Spark Master and History Web UI","href":"/docs/config/clusters/application-monitoring","docId":"config/clusters/application-monitoring"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Connections","items":[{"type":"link","label":"Create or Update Connections","href":"/docs/config/connections/create-connections","docId":"config/connections/create-connections"},{"type":"link","label":"Connection statuses","href":"/docs/config/connections/connection-status","docId":"config/connections/connection-status"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Pipelines","items":[{"type":"link","label":"Overview","href":"/docs/config/pipelines/overview","docId":"config/pipelines/overview"},{"type":"link","label":"Target filling methods","href":"/docs/config/pipelines/target-filling-methods","docId":"config/pipelines/target-filling-methods"},{"type":"link","label":"Graph behavior","href":"/docs/config/pipelines/graph-behavior","docId":"config/pipelines/graph-behavior"},{"type":"link","label":"Export pipeline","href":"/docs/config/pipelines/pipeline-export","docId":"config/pipelines/pipeline-export"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Models","items":[{"type":"link","label":"Model training parameters","href":"/docs/config/models/model-training-parameters","docId":"config/models/model-training-parameters"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"label":"Troubleshooting","type":"category","items":[{"type":"link","label":"Known issues and limitations","href":"/docs/troubleshooting/known-issues-and-limitations","docId":"troubleshooting/known-issues-and-limitations"},{"type":"link","label":"PostgreSQL - disable triggers","href":"/docs/troubleshooting/connectivity-postgresql-disable-triggers","docId":"troubleshooting/connectivity-postgresql-disable-triggers"},{"type":"link","label":"Dynamic allocation of executors","href":"/docs/troubleshooting/dynamic-resource-allocation-failed","docId":"troubleshooting/dynamic-resource-allocation-failed"}],"collapsed":true,"collapsible":true},{"label":"Legal","type":"category","items":[{"type":"link","label":"End User License Agreement","href":"/docs/legal/EULA","docId":"legal/EULA"},{"type":"link","label":"Security Policy","href":"/docs/legal/security-policy","docId":"legal/security-policy"}],"collapsed":true,"collapsible":true},{"label":"FAQ","type":"category","items":[{"type":"link","label":"FAQ - Data generation","href":"/docs/faq/faq-data-generation","docId":"faq/faq-data-generation"},{"type":"link","label":"FAQ - Subsetting","href":"/docs/faq/faq-subsetting","docId":"faq/faq-subsetting"},{"type":"link","label":"FAQ - Generic","href":"/docs/faq/faq-generic","docId":"faq/faq-generic"}],"collapsed":true,"collapsible":true}]},"docs":{"config/clusters/application-monitoring":{"id":"config/clusters/application-monitoring","title":"Apache Spark Master and History Web UI","description":"Apache Spark has powerful monitoring tools including built in Web UIs for the Master and History servers. TDspora allows quick access to the tools using URLs in the Spark master web UI URL and Spark history server web UI URL fields of the Cluster configuration page.","sidebar":"docs"},"config/clusters/cluster-connection-envs":{"id":"config/clusters/cluster-connection-envs","title":"Cluster connection environment variables","description":"The Environment variables section of the cluster configuration page allows you to pass additional environment variables to the SSH session that executes the spark-submit command. However, SSH sessions does not accept setting of environment variables unless specifically enabled in the SSH demon configuration (/etc/ssh/sshd_config).","sidebar":"docs"},"config/clusters/configuring-logging":{"id":"config/clusters/configuring-logging","title":"Configuring logging","description":"See details in Apache Spark documentation.","sidebar":"docs"},"config/clusters/spark-master-url":{"id":"config/clusters/spark-master-url","title":"Apache Spark Master URL","description":"Source: Master URLs.","sidebar":"docs"},"config/clusters/spark-submit-options":{"id":"config/clusters/spark-submit-options","title":"Apache Spark Cluster Configuration Options","description":"The TDspora application is supplied with a pre-configured Apache Spark cluster running within Docker containers. This cluster is referenced as the \\"Local cluster\\" and configured to work in the standalone mode. It has two workers.","sidebar":"docs"},"config/clusters/ssh-configuration":{"id":"config/clusters/ssh-configuration","title":"SSH configuration","description":"Here is the list of currently supported ssh config options.","sidebar":"docs"},"config/connections/connection-status":{"id":"config/connections/connection-status","title":"Connection statuses","description":"Describe what limitations the \\"Limited\\" status have.","sidebar":"docs"},"config/connections/create-connections":{"id":"config/connections/create-connections","title":"Create or Update Connections","description":"Connection Parameters","sidebar":"docs"},"config/models/model-training-parameters":{"id":"config/models/model-training-parameters","title":"Model training parameters","description":"Training a synthetic data generation model (or set of related models) requires several parameters to be provided:","sidebar":"docs"},"config/pipelines/graph-behavior":{"id":"config/pipelines/graph-behavior","title":"Graph behavior","description":"","sidebar":"docs"},"config/pipelines/overview":{"id":"config/pipelines/overview","title":"Overview","description":"Pipeline configuration overview","sidebar":"docs"},"config/pipelines/pipeline-export":{"id":"config/pipelines/pipeline-export","title":"Export pipeline","description":"Export","sidebar":"docs"},"config/pipelines/target-filling-methods":{"id":"config/pipelines/target-filling-methods","title":"Target filling methods","description":"_Re-create mode_","sidebar":"docs"},"faq/faq-data-generation":{"id":"faq/faq-data-generation","title":"FAQ - Data generation","description":"Do we spend privacy budget when generating data?","sidebar":"docs"},"faq/faq-generic":{"id":"faq/faq-generic","title":"FAQ - Generic","description":"What should I do if I did not get notification when submitted a question or requested a demo on tdspora.ai web-site?","sidebar":"docs"},"faq/faq-subsetting":{"id":"faq/faq-subsetting","title":"FAQ - Subsetting","description":"Can I turn off table columns during a pipeline design?","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"TDspora is a Test Data Management product capable of reducing the footprint of test data in non-production environments, maintaining referential integrity, generates compliant, statistically representative synthetic data protected by a differentially private deep neural network.","sidebar":"docs"},"introduction/get-started":{"id":"introduction/get-started","title":"Get started","description":"Need to change title.","sidebar":"docs"},"legal/EULA":{"id":"legal/EULA","title":"End User License Agreement","description":"EPAM SYSTEMS, INC.","sidebar":"docs"},"legal/legal-and-privacy":{"id":"legal/legal-and-privacy","title":"Legal and Privacy","description":"An EULA is a legal contract entered into between a software developer or vendor and the user of the software. A EULA specifies in detail the rights and restrictions which apply to the use of the software."},"legal/security-policy":{"id":"legal/security-policy","title":"Security Policy","description":"At EPAM Systems, Inc., we take security very seriously, and we understand the importance of safeguarding our software and users. To ensure the security of our public GitHub repository, we have implemented the following security policy.","sidebar":"docs"},"troubleshooting/connectivity-postgresql-disable-triggers":{"id":"troubleshooting/connectivity-postgresql-disable-triggers","title":"PostgreSQL - disable triggers","description":"PostgreSQL: error for ALTER TABLE DISABLE TRIGGERS ALL statement execusion by user without enough permission","sidebar":"docs"},"troubleshooting/dynamic-resource-allocation-failed":{"id":"troubleshooting/dynamic-resource-allocation-failed","title":"Dynamic allocation of executors","description":"In case of\xa0--conf spark.dynamicAllocation.enabled=true, we get the error on worker:","sidebar":"docs"},"troubleshooting/known-issues-and-limitations":{"id":"troubleshooting/known-issues-and-limitations","title":"Known issues and limitations","description":"Here we collected all know issues and limitations of the TDspora product.","sidebar":"docs"}}}')}}]);