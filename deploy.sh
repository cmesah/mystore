#!/bin/bash

# Variables
CLUSTER_NAME="MyECSCluster"
SERVICE_NAME="MyECSService"
TASK_DEFINITION="MyTaskDefinition"

# Registro de nueva tarea
aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --force-new-deployment
echo "Despliegue forzado en ECS completado"
