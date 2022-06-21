module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Get started",
      type: "category",
      items: ["introduction/get-started"],
    },
    {
      label: "Configuration",
      type: "category",
      items: [
        {
          type: "category",
          label: "Clusters",
          items: [
            "config/clusters/cluster-connection-envs",
            "config/clusters/configuring-logging",
            "config/clusters/spark-master-url",
            "config/clusters/spark-submit-options",
            "config/clusters/ssh-configuration",
            "config/clusters/application-monitoring",
          ],
        },
        {
          type: "category",
          label: "Connections",
          items: [
            "config/connections/create-connections",
            "config/connections/connection-status",
          ],
        },
        {
          type: "category",
          label: "Pipelines",
          items: [
            "config/pipelines/overview",
            "config/pipelines/target-filling-methods",
            "config/pipelines/graph-behavior",
            "config/pipelines/pipeline-export",
          ],
        },
        {
          type: "category",
          label: "Models",
          items: ["config/models/model-training-parameters"],
        },
      ],
    },
    {
      label: "Troubleshooting",
      type: "category",
      items: [
        "troubleshooting/known-issues-and-limitations",
        "troubleshooting/connectivity-postgresql-disable-triggers",
        "troubleshooting/dynamic-resource-allocation-failed",
      ],
    },
  ],
};
